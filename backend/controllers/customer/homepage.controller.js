/**
 * Render Home Page Data---------------------------------
 */

const Service = require('../../models/service.model')
const RESPONDER = require('../../responder/responder') 
const Category = require('../../models/category.model')
exports.sendHomePageData = (req, res, next ) => {

    Service.find({
        status: 'active',
        // location: {
        //  $near: {
        //   $maxDistance: 20000,
        //   $geometry: {
        //    type: 'Point',
        //    coordinates: [req.query.longitude, req.query.latitude]
        //   }
        //  }
        // }
       }).sort({createdAt: -1}).limit(10).populate('user').then( result => {

        // if(result.length > 0){
            
        Category.find().limit(6).then(cat => {

            const nData = {
                recent: result,
                category: cat,
                popular: result
            }
            const data = {
                msg: 'HomePage Data Get Successfully',
                error: false,
                data: nData
            }
            RESPONDER.response(res, 200, data)

        }).catch( catError => {
            const data = {
                msg: 'Problem in getting Category',
                error:true
            }
            RESPONDER.response(res, 200, data)
        })
        
            
        // }else{
        //     const data = {
        //         msg: 'No Service Available',
        //         error:true
        //     }
        //     RESPONDER.response(res, 200, data)
        // }

       }).catch( error => {
        
            const data = {
                msg: 'Problem in getting service',
                error:true
            }
            RESPONDER.response(res, 200, data)
       })
}

exports.autoCompleteHomePage = (req, res, next ) => {

    Service.distinct("title",{
        status: 'active',
        $or: [
            {
                'title': {$regex: req.body.key, $options: 'i'}
            },
            {
                'category.name': {$regex: req.body.key, $options: 'i'}
            },
            {
                'sub_category.name': {$regex: req.body.key, $options: 'i'}
            }
        ]
       }).then( result => {

        if(result.length > 0){
            const data = {
                msg: 'AutoComplete Data Get Successfully',
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