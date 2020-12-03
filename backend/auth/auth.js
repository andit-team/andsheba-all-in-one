/**
 * Auth-----------------------
 */
const jwt = require("jsonwebtoken") 
const RESPONDER = require("../responder/responder") 
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
            const data = {
                msg: "You are not authenticated",
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }catch (err) {
        const data = {
            msg: "You are not authenticated",
            error:true
        }
        RESPONDER.response(res, 200, data)
    }
}