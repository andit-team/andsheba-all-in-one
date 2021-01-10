/**
 * Render Dashboard Data---------------------------------
 */

const Service = require('../../models/service.model')
const Order = require('../../models/order.model')
const RESPONDER = require('../../responder/responder') 
const mongoose = require('mongoose')

exports.sendHomePageData = (req, res, next ) => {

    const orderAggregatorOpts = [
        {
            $match: { pro: mongoose.Types.ObjectId(req.userData.user_id) }
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        },
        { 
            $project: {  
            _id: 0,
            status: "$_id",
            count: 1
        }
      }
    ]

    const serviceAggregatorOpts = [
        {
            $match: { user: mongoose.Types.ObjectId(req.userData.user_id) }
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                _id: 0,
                status: "$_id",
                count: 1
            }
        }
    ]

    Order.aggregate(orderAggregatorOpts).then( result => {

        return result

    }).then(orderData => {

        Service.aggregate(serviceAggregatorOpts).then( result => {

            const data = {
                msg: 'Successfully Get Data',
                error: false,
                serviceData: result,
                orderData: orderData
            }
            RESPONDER.response(res, 200, data)
    
        }).catch( error => {
        
            const data = {
                msg: 'Problem in getting services',
                error:true
            }
            RESPONDER.response(res, 200, data)
        })

    }).catch( error => {
    
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}