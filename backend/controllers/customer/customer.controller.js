/**
 * Customer Controller-----------------
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const RESPONDER = require('../../responder/responder') 
exports.signUp = (req, res, next ) => {

    const hash = bcrypt.hashSync(req.body.password, 8)
    const newUser = new User({
       name: req.body.name,
       mobile: req.body.mobile,
       password: hash,
       email:req.body.email,
       status: 'active',
       role: 'customer',
       registration_ip: req.ip
    })

    newUser.save().then( result => {
        if(result){

            const token = jwt.sign({_id: result._id, role: result.role}, process.env.SECRET, {
                expiresIn: '8h'
            })
            const data = {
                token: token,
                msg: 'Successfully Created User',
                error:false,
                data: result
            }
            RESPONDER.response(res, 200, data)

        }else{
            const data = {
                msg: 'Failed to Create User',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch( err => {
        const data = {
            msg: 'Failed to Create User',
            error:true,
            err: err
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.login = (req, res, next) => {
    let fetchUser 
    User.findOne({
        mobile: req.body.mobile,
        role: 'customer'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: 'Customer Not Found'
                }
                RESPONDER.response(res, 200, data)
            }
            if(user.status !== 'active'){
                const data = {
                    error: true,
                    msg: 'You are not activated'
                }
                RESPONDER.response(res, 200, data)
            }
            fetchUser = user 
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
            const token = jwt.sign({_id: fetchUser._id, role: fetchUser.role}, process.env.SECRET, {
                expiresIn: '8h'
            }) 
            const data = {
                token: token,
                msg: 'Successfully Log in Customer',
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: 'Customer Log in Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }) 
}

exports.getAllCustomerByAdmin = (req, res, next) => {

    let query = {
        role: 'customer'
    }

    if(req.query.status !== ""){
        query.status = req.query.status
    }

    User.find(query).then(result => {

        if(result.length > 0){
            const data = {
                error:false,
                msg: 'Successfully Get Customer Data',
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'No Customer Available'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Problem in getting Customer Data'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.updateCustomerStatusByAdmin = (req, res, next) => {
    
    let updateData = {
        status: req.body.status
    }
    let query = {
        _id: req.params._id
    }
    User.updateOne(query,updateData).then(result => {

        if(result.n > 0){
            const data = {
                error:false,
                msg: 'Successfully Update Customer Status'
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'Update Customer Status Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Update Customer Status Unsuccessful'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.verifyCustomer = (req, res, next) => {
    try{

        const token = req.body.token
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'customer'){
            User.findById(decodedToken._id).then( result => {
                const data = {
                    msg: 'User Verified',
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