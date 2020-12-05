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
       status: 0,
       role: 'pro',
       registration_ip: req.ip
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