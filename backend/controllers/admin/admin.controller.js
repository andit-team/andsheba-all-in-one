/**
 * Admin Controller------------------------------
 */

const User = require("../../models/user.model") 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken') 
const RESPONDER = require("../../responder/responder") 

exports.createAdmin =  (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 8) 
    const newUser = new User({
        mobile: req.body.mobile,
        password: hash,
        role:'admin'
    }) 
    newUser.save().then( result => {
        const token = jwt.sign({_id: result._id, role: result.role}, process.env.SECRET, {
            expiresIn: "8h"
        }) 
        const data = {
            token: token,
            msg: "Successfully Created Admin",
            error:false
        }
        RESPONDER.response(res, 200, data)
    }).catch((err) => {
        const data = {
            msg: "Admin Creation was Unsuccessful",
            error:true
        }
        RESPONDER.response(res, 200, data)
    })

}

exports.adminLogin = (req, res, next) => {
    let fetchAdmin 
    User.findOne({
        mobile: req.body.mobile,
        role: 'admin'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: "Admin Not Found"
                }
                RESPONDER.response(res, 200, data)
            }
            fetchAdmin = user 
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
            const token = jwt.sign({_id: fetchAdmin._id, role: fetchAdmin.role}, process.env.SECRET, {
                expiresIn: "8h"
            }) 
            const data = {
                token: token,
                msg: "Successfully Log in Admin",
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: "Admin Log in Unsuccessful"
            }
            RESPONDER.response(res, 200, data)
        }) 
}