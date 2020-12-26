/**
 * Service Controller---------------------------------
 */

const Service = require('../../models/service.model')
const User = require('../../models/user.model')
const Admin = require('../../models/admin.model')
const mongo = require('mongodb')
const ObjectID = mongo.ObjectID
const RESPONDER = require('../../responder/responder') 

exports.addService = async(req, res, next ) => {

    let questions = []

    req.body.questions.forEach(question => {

        let answers = []
        question.answers.forEach(element => { 
            let ans = {
                _id: new ObjectID(),
                answer_title_or_unit: element.answer_title_or_unit,
                price: element.price
            }
            answers.push(ans)
        })

        let newQuestion = {
            _id: new ObjectID(),
            title: question.title,
            question_type: question.question_type,
            answers: answers
        }

        questions.push(newQuestion)

    })

    let resData = {
        title: req.body.title,
        description: req.body.description,
        thumb_img: req.body.thumb_img,
        gallery_images: req.body.gallery_images,
        user: req.userData.user_id,
        address: req.body.address,
        location: {
            type: 'Point',
            coordinates: [req.body.address.location.lng,req.body.address.location.lat]
        },
        category: req.body.category,
        sub_category: req.body.sub_category,
        tags: req.body.tags,
        faq: req.body.faq,
        questions: questions,
        status: 'pending',
        message: 'Your Request is in Pending Mode',
        residential_or_municipal: req.body.residential_or_municipal
    }

    let agent
    if(req.body.residential_or_municipal === 'residential'){
        
        agent = await User.findOne({
            role: 'agent',
            status: 'approved',
            agent_level: 'village',
            division: req.body.division,
            district: req.body.district,
            upazila: req.body.upazila,
            union: req.body.union,
            village: req.body.village
        },{
            _id: 1
        })

        if(!agent){

            agent = await User.findOne({
                role: 'agent',
                status: 'approved',
                agent_level: 'union',
                division: req.body.division,
                district: req.body.district,
                upazila: req.body.upazila,
                union: req.body.union
            },{
                _id: 1
            })

            if(!agent){

                agent = await User.findOne({
                    role: 'agent',
                    status: 'approved',
                    agent_level: 'upazila',
                    division: req.body.division,
                    district: req.body.district,
                    upazila: req.body.upazila
                },{
                    _id: 1
                })

                if(!agent){

                    agent = await User.findOne({
                        role: 'agent',
                        status: 'approved',
                        agent_level: 'district',
                        division: req.body.division,
                        district: req.body.district
                    },{
                        _id: 1
                    })
                    if(!agent){

                        agent = await User.findOne({
                            role: 'agent',
                            status: 'approved',
                            agent_level: 'division',
                            division: req.body.division,
                        },{
                            _id: 1
                        })

                        if(!agent){
                            const data = {
                                msg: 'No Agent In Your Area',
                                error:true
                            }
                            RESPONDER.response(res, 200, data)
                        }
                    }
                }

            }
        }

        resData = {
            ...resData,
            division: req.body.division,
            district: req.body.district,
            upazila: req.body.upazila,
            union: req.body.union,
            village: req.body.village,
            agent: agent._id
        }

    } else {
        
        agent = await User.findOne({
            role: 'agent',
            status: 'approved',
            agent_level: 'ward',
            division: req.body.division,
            district: req.body.district,
            municipal: req.body.municipal,
            ward: req.body.ward
        },{
            _id: 1
        })

        if(!agent){

            agent = await User.findOne({
                role: 'agent',
                status: 'approved',
                agent_level: 'municipal',
                division: req.body.division,
                district: req.body.district,
                municipal: req.body.municipal
            },{
                _id: 1
            })
                if(!agent){

                    agent = await User.findOne({
                        role: 'agent',
                        status: 'approved',
                        agent_level: 'district',
                        division: req.body.division,
                        district: req.body.district
                    },{
                        _id: 1
                    })
                    if(!agent){

                        agent = await User.findOne({
                            role: 'agent',
                            status: 'approved',
                            agent_level: 'division',
                            division: req.body.division,
                        },{
                            _id: 1
                        })

                        if(!agent){

                            const data = {
                                msg: 'No Agent In Your Area',
                                error:true
                            }
                            RESPONDER.response(res, 200, data)
                        }
                    }
            }
        }

        resData = {
            ...resData,
            division: req.body.division,
            district: req.body.district,
            municipal: req.body.municipal,
            ward: req.body.ward,
            agent: agent._id
        }
    }
    const newService = new Service(resData)
    newService.save().then( result => {

        if(result){
            const data = {
                msg: 'Service added',
                error: false,
                data: result
            }
            Admin.findOne({
                role: 'admin'
            }).then( admin => {
                req.io.to(admin._id.toString()).emit('service_added', data) // For admin realtime notification------------------------------------
                RESPONDER.response(res, 200, data)
            }).catch(error => {
                console.log(error)
                const data = {
                    msg: 'Admin Not found',
                    error:true
                }
                RESPONDER.response(res, 200, data)
            })
            
        }else{
            const data = {
                msg: 'Problem in adding service',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch( error => {

        const data = {
            msg: 'Problem in adding service',
            error:true
        }
        RESPONDER.response(res, 200, data)

    })
}

exports.findAllServices = (req, res, next ) => {
    const userId = req.userData.user_id

    Service.find({user: userId}).sort({createdAt: -1}).populate('user').then( result => {

        if(result.length > 0){
            const data = {
                msg: 'Service Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: 'Problem in getting service',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch( error => {

        const data = {
            msg: 'Problem in getting service',
            error:true
        }
        RESPONDER.response(res, 200, data)

    })

    

}

exports.findAllServicesByAdmin = (req, res, next ) => {

    Service.find().sort({createdAt: -1}).populate('user').then( result => {

        if(result.length > 0){
            const data = {
                msg: 'Service Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: 'Problem in getting service',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch( error => {

        const data = {
            msg: 'Problem in getting service',
            error:true
        }
        RESPONDER.response(res, 200, data)

    })

    

}

exports.getOneService = (req, res, next ) => {

    Service.findOne({_id: req.params._id}).then( result => {

        if(result){
            const data = {
                msg: 'Service Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: 'No Service Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

       }).catch( error => {
        
        const data = {
            msg: 'Problem in getting service',
            error:true
        }
        RESPONDER.response(res, 200, data)
       })
}

exports.updateServiceStatus = (req, res, next ) => {

    Service.updateOne({_id: req.params._id},{status: req.body.status}).then( result => {

        if(result.n > 0){
            const data = {
                msg: 'Service Updated Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: 'Service Update Failed',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

       }).catch( error => {
        
        const data = {
            msg: 'Service Update Failed',
            error:true
        }
        RESPONDER.response(res, 200, data)
       })
}