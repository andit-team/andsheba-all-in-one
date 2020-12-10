/**
 * Service Controller---------------------------------
 */

const Service = require("../../models/service.model")
const User = require("../../models/user.model")
const Admin = require("../../models/admin.model")
const mongo = require('mongodb')
const ObjectID = mongo.ObjectID
const RESPONDER = require("../../responder/responder") 

exports.addService = (req, res, next ) => {

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


    const newService = new Service({
        title: req.body.title,
        description: req.body.description,
        thumb_img: req.body.thumb_img,
        gallery_images: req.body.gallery_images,
        user: req.userData.user_id,
        address: req.body.address,
        location: {
            type: "Point",
            coordinates: [req.body.address.location.lng,req.body.address.location.lat]
        },
        category: req.body.category,
        sub_category: req.body.sub_category,
        tags: req.body.tags,
        faq: req.body.faq,
        questions: questions,
        status: 'pending'
    })

    newService.save().then( result => {

        if(result){
            const data = {
                msg: "Service added",
                error: false,
                data: result
            }
            Admin.findOne({
                role: 'admin'
            }).then( admin => {
                req.io.to(admin._id).emit('service_added', data) // For admin realtime notification------------------------------------
                RESPONDER.response(res, 200, data)
            }).catch(error => {
                console.log(error)
                const data = {
                    msg: "Admin Not found",
                    error:true
                }
                RESPONDER.response(res, 200, data)
            })
            
        }else{
            const data = {
                msg: "Problem in adding service",
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch( error => {

        const data = {
            msg: "Problem in adding service",
            error:true
        }
        RESPONDER.response(res, 200, data)

    })

    

}

exports.findAllServices = (req, res, next ) => {
    const userId = req.userData.user_id

    Service.find({user: userId}).populate('user').then( result => {

        if(result.length > 0){
            const data = {
                msg: "Service Get Successfully",
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: "Problem in getting service",
                error:true
            }
            RESPONDER.response(res, 200, data)
        }

    }).catch( error => {

        const data = {
            msg: "Problem in getting service",
            error:true
        }
        RESPONDER.response(res, 200, data)

    })

    

}