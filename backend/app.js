const dotEnv = require("dotenv")
dotEnv.config()
const express = require('express') 
const mongoose = require("mongoose") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const path = require("path") 
const compression = require('compression') 
const helmet = require('helmet') 
const jwt = require("jsonwebtoken")
const socket = require('./socket/socket')

const app = express() 
const PORT = process.env.PORT 
//process.env.NODE_ENV = 'production'

// For Track IP Address
app.enable('trust proxy') 

//Compress all routes
app.use(compression()) 
//User Helmet
app.use(helmet()) 

// Configure Mongoose to Connect to MongoDB
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((response) => {
        console.log("MongoDB Connected Successfully.") 
    })
    .catch((err) => {
        console.log("Database connection failed.") 
    }) 


// Configure Express
app.use(express.json()) 
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
) 
// Set static folder
app.use("/uploads", express.static(path.join("uploads")))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")  //* will allow from all cross domain
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    ) 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS") 
    next() 
}) 

app.use(cors()) 

/* Routes */
const api = require("./routes/api") 

app.use("/api", api) 


// For Socket.io--------------------------------------------
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      credentials: true
    }
})

io.use((socket, next) => {
    try {
        const token = socket.handshake.query.token
        const payload = jwt.verify(token, process.env.SECRET)
        socket.userId = payload._id
        next()
    } catch (err) {}
})
socket(io)

/* Start The Server */
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 