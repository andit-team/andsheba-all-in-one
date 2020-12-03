/**
 * Auth-----------------------
 */
const jwt = require("jsonwebtoken") 
module.exports = (req, res, next) => {
    try{

        const token = req.headers.authorization.split(" ")[1] 
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'admin'){
            req.userData = {
                user_id: decodedToken._id,
                role: decodedToken.role
            }
            next()
        }else{
            return res.status(200).json({error: true, msg: "You are not authenticated"}) 
        }

    }catch (err) {
        return res.status(400).json({error: true,status: 201, msg: "You are not authenticated",err: err})
    }
}