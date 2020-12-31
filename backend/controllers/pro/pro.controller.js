/**
 *  Pro Controller------------------------------------------
 */

const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const RESPONDER = require('../../responder/responder') 
const mongoose = require('mongoose')

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
    let fetchPro 
    User.findOne({
        mobile: req.body.mobile,
        role: 'pro'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: 'Pro Not Found'
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
            fetchPro = user 
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
            const token = jwt.sign({_id: fetchPro._id, role: fetchPro.role}, process.env.SECRET, {
                expiresIn: '8h'
            }) 
            const data = {
                token: token,
                msg: 'Successfully Log in Pro',
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: 'Pro Log in Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }) 
}

exports.getAllProByAdmin = (req, res, next) => {

    let query = {
        role: 'pro'
    }

    if(req.query.status !== ""){
        query.status = req.query.status
    }

    User.find(query).then(result => {

        if(result.length > 0){
            const data = {
                error:false,
                msg: 'Successfully Get Pro Data',
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'No Pro Available'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Problem in getting Pro Data'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getOnePro = (req, res, next) => {

    User.aggregate([
        {
            $match: {
                _id: mongoose.Types.ObjectId(req.query._id)
            }
        },
        {
            $lookup: {
                from: 'services',
                localField: '_id',
                foreignField: 'user',
                as: 'services'
            }
        },
    ]).then(result => {

        if(result){
            const data = {
                error:false,
                msg: 'Successfully Get Pro Data',
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'No Pro Available'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        console.log(error)
        const data = {
            error: true,
            msg: 'Problem in getting Pro Data'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.updateProStatusByAdmin = (req, res, next) => {
    
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
                msg: 'Successfully Update Pro Status'
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'Update Pro Status Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Update Pro Status Unsuccessful'
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

// exports.updateProfilePicture = (req, res, next) => {
    
//     let updateData = {
//         picture: req.body.picture
//     }
//     let query = {
//         _id: req.userData.user_id
//     }
//     User.updateOne(query,updateData).then(result => {

//         if(result.n > 0){
//             const data = {
//                 error:false,
//                 msg: 'Successfully Update Profile Picture'
//             }
//             RESPONDER.response(res, 200, data)
//         }else{
//             const data = {
//                 error: true,
//                 msg: 'Update Profile Picture Unsuccessful'
//             }
//             RESPONDER.response(res, 200, data)
//         }

//     }).catch(error => {
//         const data = {
//             error: true,
//             msg: 'Update Profile Picture Unsuccessful'
//         }
//         RESPONDER.response(res, 200, data)
//     })
// }

exports.updateProfile = (req, res, next) => {
    
    let updateData = {
       name: req.body.name,
       email: req.body.email,
       cover_image: req.body.cover_image,
       thumb_image: req.body.thumb_image,
       date_of_birth: req.body.date_of_birth,
       gender: req.body.gender,
       description: req.body.description
    }
    if(req.body.password !== ''){
        let hash = bcrypt.hashSync(req.body.password, 8)
        updateData = {
            ...updateData,
            password: hash
        }
    }
    let query = {
        _id: req.userData.user_id
    }
    User.updateOne(query,updateData).then(result => {

        if(result.n > 0){
            const data = {
                error:false,
                msg: 'Successfully Update Profile'
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'Update Profile Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Update Profile Unsuccessful'
        }
        RESPONDER.response(res, 200, data)
    })
}