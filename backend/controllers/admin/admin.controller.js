/**
 * Admin Controller------------------------------
 */

const Admin = require('../../models/admin.model') 
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken') 
const RESPONDER = require('../../responder/responder') 

exports.createAdmin =  (req, res, next) => {
    const hash = bcrypt.hashSync(req.body.password, 8) 
    const newUser = new Admin({
        mobile: req.body.mobile,
        password: hash,
        name: req.body.name,
        role:'admin'
    }) 
    newUser.save().then( result => {
        const token = jwt.sign({_id: result._id, role: result.role}, process.env.SECRET, {
            expiresIn: '8h'
        }) 
        const data = {
            token: token,
            msg: 'Successfully Created Admin',
            error:false
        }
        RESPONDER.response(res, 200, data)
    }).catch((err) => {
        console.log(err)
        const data = {
            msg: 'Admin Creation was Unsuccessful',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })

}

exports.adminLogin = (req, res, next) => {
    let fetchAdmin 
    Admin.findOne({
        mobile: req.body.mobile,
        role: 'admin'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: 'Admin Not Found'
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
                    msg: 'Password Not Matched'
                }
                RESPONDER.response(res, 200, data)
            }
            const token = jwt.sign({_id: fetchAdmin._id, role: fetchAdmin.role}, process.env.SECRET, {
                expiresIn: '8h'
            }) 
            const data = {
                token: token,
                msg: 'Successfully Log in Admin',
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: 'Admin Log in Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }) 
}

exports.verifyAdmin = (req, res, next) => {
    try{

        const token = req.body.token
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'admin'){
            Admin.findById(decodedToken._id).then( result => {
                const data = {
                    msg: 'Admin Verified',
                    error: false,
                    data: result
                }
                RESPONDER.response(res, 200, data)
            })
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