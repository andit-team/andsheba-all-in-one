/**
 * Auth-----------------------
 */
const jwt = require('jsonwebtoken') 
const RESPONDER = require('../responder/responder') 
module.exports.admin = (req, res, next) => {
    try{

        const token = req.headers.authorization.split(' ')[1] 
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'admin'){
            req.userData = {
                user_id: decodedToken._id
            }
            next()
        }else{
            const data = {
                msg: 'You are not authenticated',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }catch (err) {
        const data = {
            msg: 'You are not authenticated',
            error:true
        }
        RESPONDER.response(res, 200, data)
    }
}

module.exports.user = (req, res, next) => {
    try{

        const token = req.headers.authorization.split(' ')[1] 
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'pro'){
            req.userData = {
                user_id: decodedToken._id
            }
            next()
        }else if(decodedToken.role === 'agent'){
            req.userData = {
                user_id: decodedToken._id
            }
            next()
        }else if(decodedToken.role === 'customer'){
            req.userData = {
                user_id: decodedToken._id
            }
            next()
        }else{
            const data = {
                msg: 'You are not authenticated',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }catch (err) {
        const data = {
            msg: 'You are not authenticated',
            error:true
        }
        RESPONDER.response(res, 200, data)
    }
}