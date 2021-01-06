/**
 * Order Controller---------------------------------
 */

const Order = require('../../models/order.model')
const Service = require('../../models/service.model')
const RESPONDER = require('../../responder/responder') 

exports.placeOrder = (req, res, next ) => {
    Service.findById(req.body.service_id).then(serviceResult => {
        let order = {
            service: serviceResult._id,
            agent: serviceResult.agent,
            pro: serviceResult.user,
            customer: req.userData.user_id,
            answered_questions: req.body.answered_questions,
            images: req.body.images,
            total: req.body.total,
            status: 'pending',
            approved_by_customer: true,
            approved_by_pro: false,
            message: 'Your Order is in Pending Mode'
        }

        if(serviceResult.residential_or_municipal === 'residential'){
            order = {
                ...order,
                division: serviceResult.division,
                district: serviceResult.district,
                upazila: serviceResult.upazila,
                union: serviceResult.union,
                village: serviceResult.village
            }
        }else{
            order = {
                ...order,
                division: serviceResult.division,
                district: serviceResult.district,
                municipal: serviceResult.municipal,
                ward: serviceResult.ward
            }
        }

        const newOrder = new Order(order)
        newOrder.save().then(result => {
            if(result){
                req.io.to(result.pro).emit('order_get_by_pro', result) // For Pro realtime notification------------------------------------
                const data = {
                    msg: 'Order Placed Successfully',
                    error: false,
                    data: result
                }
                RESPONDER.response(res, 200, data)
            }else{
                const data = {
                    msg: 'Problem in placeing Order',
                    error:true
                }
                RESPONDER.response(res, 200, data)
            }
        }).catch(error => {
            const data = {
                msg: 'Problem in placeing Order',
                error:true
            }
            RESPONDER.response(res, 200, data)
        })
    }).catch(error => {
        const data = {
            msg: 'Problem in getting service',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getAllOrdersByPro = (req, res, next ) => {
    let query = {
        pro: req.userData.user_id
    }
    if(req.query.status !== ''){
        query = {
            ...query,
            status: req.query.status
        }
    }
    Order.find(query).populate('agent').populate('customer').populate('service').then(result => {
        if(result.length > 0){
            const data = {
                msg: 'Order Data Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'No Data Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getAllOrdersByAgent = (req, res, next ) => {
    let query = {
        agent: req.userData.user_id
    }
    if(req.query.status !== ''){
        query = {
            ...query,
            status: req.query.status
        }
    }
    Order.find(query).populate('pro').populate('customer').populate('service').then(result => {
        if(result.length > 0){
            const data = {
                msg: 'Order Data Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'No Data Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getAllOrdersByCustomer = (req, res, next ) => {
    let query = {
        customer: req.userData.user_id
    }
    if(req.query.status !== ''){
        query = {
            ...query,
            status: req.query.status
        }
    }
    Order.find(query).populate('pro').populate('agent').populate('service').then(result => {
        if(result.length > 0){
            const data = {
                msg: 'Order Data Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'No Data Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getAllOrdersByAdmin = (req, res, next ) => {
    let query = {}
    if(req.query.status !== ''){
        query = {
            ...query,
            status: req.query.status
        }
    }
    Order.find(query).populate('pro').populate('agent').populate('customer').populate('service').then(result => {
        if(result.length > 0){
            const data = {
                msg: 'Order Data Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'No Data Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getOneOrder = (req, res, next ) => {
    
    Order.findById(req.query._id).populate('pro').populate('agent').populate('customer').populate('service').then(result => {
        if(result){
            const data = {
                msg: 'Order Data Get Successfully',
                error: false,
                data: result
            }
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'No Data Available',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in getting Orders',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.updateOrderStatusByPro = (req, res, next ) => {
    let query = {
        _id: req.params._id
    }

    let updateData = {}
    if(req.body.status === 'rejected'){
        updateData = {
            ...updateData,
            status: req.body.status,
            approved_by_pro: false
        }
    }

    if(req.body.status === 'accepted'){
        updateData = {
            ...updateData,
            status: req.body.status,
            approved_by_pro: true
        }
    }

    if(req.body.status === 'accepted' && req.body.proposal_flag === true){
        updateData = {
            ...updateData,
            status: 'pending',
            approved_by_pro: true,
            answered_questions: req.body.answered_questions,
            approved_by_customer: false
        }
    }

    Order.findOneAndUpdate(query,updateData).then(result => {
        if(result){
            const data = {
                msg: 'Order Status Changed Successfully',
                error: false,
                data: result
            }
            req.io.to(result.customer).emit('order_status_get_by_customer', result) // For Customer realtime notification------------------------------------
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'Problem in changing Order status',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in changing Order status',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.updateOrderStatusByCustomer = (req, res, next ) => {
    let query = {
        _id: req.params._id
    }

    let updateData = {}
    if(req.body.status === 'rejected'){
        updateData = {
            ...updateData,
            status: req.body.status,
            approved_by_customer: false
        }
    }

    if(req.body.status === 'accepted'){
        updateData = {
            ...updateData,
            status: req.body.status,
            approved_by_customer: true
        }
    }

    Order.findOneAndUpdate(query,updateData).then(result => {
        if(result){
            const data = {
                msg: 'Order Status Changed Successfully',
                error: false,
                data: result
            }
            req.io.to(result.pro).emit('order_status_get_by_pro', result) // For Pro realtime notification------------------------------------
            RESPONDER.response(res, 200, data)
        }else{
            const data = {
                msg: 'Problem in changing Order status',
                error:true
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        const data = {
            msg: 'Problem in changing Order status',
            error:true
        }
        RESPONDER.response(res, 200, data)
    })
}