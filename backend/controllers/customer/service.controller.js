/**
 * Service Controller---------------------------------
 */

const Service = require("../../models/service.model")
const RESPONDER = require("../../responder/responder") 

exports.searchService = (req, res, next ) => {

    Service.find({
        status: 'approved',
        location: {
         $near: {
          $maxDistance: 20000,
          $geometry: {
           type: "Point",
           coordinates: [req.query.longitude, req.query.latitude]
          }
         }
        },
        $or: [
            {
                'category.name': {$regex: req.query.category, $options: 'i'}
            },
            {
                'sub_category.name': {$regex: req.query.sub_category, $options: 'i'}
            }
        ]
        
       }).populate('user').then( result => {

        if(result.length > 0){
            const data = {
                msg: "Service Get Successfully",
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: "No Service Available",
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

exports.getOneService = (req, res, next ) => {

    Service.findById(req.params._id).populate('user').then( result => {

        if(result){
            const data = {
                msg: "Service Get Successfully",
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
            
        }else{
            const data = {
                msg: "No Service Available",
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