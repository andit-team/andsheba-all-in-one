/**
 * Agent Controller-----------------
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const Admin = require('../../models/admin.model')
const User = require('../../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const RESPONDER = require('../../responder/responder') 

exports.signUpAgent = (req, res, next ) => {

    const hash = bcrypt.hashSync(req.body.password, 8)

    let agent = {
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        role: 'agent',
        label_address: req.body.label_address,
        password: hash,
        status: "pending",
        message: "Your Request is in Pending Mode.......",
        nid_no: req.body.nid_no,
        agent_level: req.body.agent_level
    }

    if(req.body.agent_level === 'division'){

        agent = {
            ...agent,
            division: req.body.division
        }

    } else if(req.body.agent_level === 'district') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district
        }

    }else if(req.body.agent_level === 'upazila') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district,
            upazila: req.body.upazila
        }

    }else if(req.body.agent_level === 'union') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district,
            upazila: req.body.upazila,
            union: req.body.union
        }

    }else if(req.body.agent_level === 'village') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district,
            upazila: req.body.upazila,
            union: req.body.union,
            village: req.body.village
        }
    }else if(req.body.agent_level === 'municipal') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district,
            municipal: req.body.municipal
        }

    }else if(req.body.agent_level === 'ward') {

        agent = {
            ...agent,
            division: req.body.division,
            district: req.body.district,
            municipal: req.body.municipal,
            ward: req.body.ward
        }

    }

    const newUser = new User(agent)

    newUser.save().then( result => {
        if(result){

            const data = {
                msg: 'Successfully Created Agent',
                error:false,
                data: result
            }

            Admin.findOne({
                role: 'admin'
            }).then( admin => {
                req.io.to(admin._id.toString()).emit('agent_added', data) // For admin realtime notification------------------------------------
                RESPONDER.response(res, 200, data)
            }).catch(error => {
                const data = {
                    msg: 'Admin Not found',
                    error:true
                }
                RESPONDER.response(res, 200, data)
            })

        }else{
            const data = {
                msg: 'Failed to Create Agent',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch( err => {
        const data = {
            msg: 'Failed to Create Agent',
            error:true,
            err: err
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.loginAgent = (req, res, next) => {
    let fetchUser 
    User.findOne({
        mobile: req.body.mobile,
        role: 'agent'
    })
        .then(user => {
            if(!user){
                const data = {
                    error: true,
                    msg: 'Agent Not Found'
                }
                RESPONDER.response(res, 200, data)
            }
            if(user.status !== 'approved'){
                const data = {
                    error: true,
                    msg: user.message
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
                msg: 'Successfully Log in Agent',
                error:false
            }
            RESPONDER.response(res, 200, data)
        })
        .catch((err) => {
            const data = {
                error: true,
                msg: 'Agent Log in Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }) 
}

exports.getAllAgentByAdmin = (req, res, next) => {

    let query = {
        role: 'agent'
    }

    if(req.query.status !== ""){
        query.status = req.query.status
    }

    User.find(query).then(result => {

        if(result.length > 0){
            const data = {
                error:false,
                msg: 'Successfully Get Agent Data',
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'No Agent Available'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Problem in getting Agent Data'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getOneAgent = (req, res, next) => {

    User.findById(req.query._id).then(result => {

        if(result){
            const data = {
                error:false,
                msg: 'Successfully Get Agent Data',
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'No Agent Available'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Problem in getting Agent Data'
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.updateAgentByAdmin = (req, res, next) => {

    let updateData = {
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        label_address: req.body.label_address,
        status: req.body.status,
        message: req.body.message,
        nid_no: req.body.nid_no,
    }
    if(req.body.password !== ''){
        const hash = bcrypt.hashSync(req.body.password, 8)
        updateData.password = hash
    }
    let query = {
        _id: req.params._id
    }
    User.updateOne(query,updateData).then(result => {

        if(result.n > 0){
            const data = {
                error:false,
                msg: 'Successfully Update Agent'
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                error: true,
                msg: 'Update Agent Unsuccessful'
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch(error => {
        const data = {
            error: true,
            msg: 'Update Agent Unsuccessful'
        }
        RESPONDER.response(res, 200, data)
    })

}

exports.verifyAgent = (req, res, next) => {
    try{

        const token = req.body.token
        const decodedToken = jwt.verify(
            token,
            process.env.SECRET
        ) 

        if(decodedToken.role === 'agent'){
            User.findById(decodedToken._id).then( result => {
                const data = {
                    msg: 'Agent Verified',
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
