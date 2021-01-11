/**
 * Render Dashboard Data---------------------------------
 */

const Service = require('../../models/service.model')
const Order = require('../../models/order.model')
const RESPONDER = require('../../responder/responder') 
const mongoose = require('mongoose')

exports.sendHomePageData = (req, res, next ) => {

    Order.countDocuments({agent: mongoose.Types.ObjectId(req.userData.user_id)}).then( result => {

        return result

    }).then(orderData => {

        Service.countDocuments({agent: mongoose.Types.ObjectId(req.userData.user_id)}).then( result => {

            const data = {
                msg: 'Successfully Get Data',
                error: false,
                data: {
                    serviceCount: result,
                    orderCount: orderData
                }
                
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