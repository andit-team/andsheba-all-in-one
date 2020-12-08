/**
 *  Pro Controller------------------------------------------
 */

const User = require("../../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const RESPONDER = require("../../responder/responder") 

exports.signUpPro = (req, res, next) => {

    const hash = bcrypt.hashSync(req.body.password, 8)
    const newUser = new User({
       name: req.body.name,
       mobile: req.body.mobile,
       password: hash,
       email:req.body.email,
       status: 'active',
       role: 'pro',
       registration_ip: req.ip,
       plan: req.body.plan
    })

    newUser.save().then( result => {
        if(result){

            const token = jwt.sign({_id: result._id, role: result.role}, process.env.SECRET, {
                expiresIn: "8h"
            })
            const data = {
                token: token,
                msg: "Successfully Created User",
                error:false,
                data: result
            }
            RESPONDER.response(res, 200, data)

        }else{
            const data = {
                msg: "Failed to Create User",
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch( err => {
        const data = {
            msg: "Failed to Create User",
            error:true,
            err: err
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.login = (req, res, next) => {
    let fetchPro 
    User.findOne({
        mobile: req.body.mobile,
        role: 'pro'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: "Pro Not Found"
                }
                RESPONDER.response(res, 200, data)
            }
            if(user.status !== 'active'){
                const data = {
                    error: true,
                    msg: "You are not activated"
                }
                RESPONDER.response(res, 200, data)
            }
            fetchPro = user 
            return bcrypt.compare(req.body.password, user.password) 
        })
        .then(result => {
            if(!result){
                const data = {
                    error: true,
                    msg: "Password Not Matched"
                }
                RESPONDER.response(res, 200, data)
            }
            const token = jwt.sign({_id: fetchPro._id, role: fetchPro.role}, process.env.SECRET, {
                expiresIn: "8h"
            }) 
            const data = {
                token: token,
                msg: "Successfully Log in Pro",
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: "Pro Log in Unsuccessful"
            }
            RESPONDER.response(res, 200, data)
        }) 
}

exports.verifyPro = (req, res, next) => {
    try{

        const token = req.body.token
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'pro'){
            User.findById(decodedToken._id).then( result => {
                const data = {
                    msg: "User Verified",
                    error:true,
                    data: result
                }
                RESPONDER.response(res, 200, data)
            })
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