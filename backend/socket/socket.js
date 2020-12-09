// All Socket Functionality Will do here----------------------------
function socket( io ){
    io.on('connection', socket => { 
        let userId = socket.userId
            socket.join(userId)
            console.log("Connected: " + userId)

            socket.on("disconnect", () => {
                socket.leave(userId)
                console.log("Disconnected: " + socket.userId)
            })
    })
}
module.exports = socket