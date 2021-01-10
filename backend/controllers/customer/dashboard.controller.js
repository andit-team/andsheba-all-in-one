/**
 * Render Dashboard Data---------------------------------
 */

const Order = require('../../models/order.model')
const RESPONDER = require('../../responder/responder') 
const mongoose = require('mongoose')

exports.sendHomePageData = (req, res, next ) => {

    Order.countDocuments({customer: mongoose.Types.ObjectId(req.userData.user_id)}).then( result => {
        const data = {
            msg: 'Successfully Get Data',
            error: false,
            orderCount: result
        }
        RESPONDER.response(res, 200, data)
    }).catch( error => {
    
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}