/**
 * Plan Crud Controller By Admin -----------------------------
 */
const Plan = require('../../models/plan.model')
const RESPONDER = require("../../responder/responder") 
exports.addPlan = (req, res, next) => {

    let newPlan = new Plan({
        title: req.body.title,
        price: +req.body.price,
        commision: +req.body.commision,
        duration: req.body.duration
    })

    newPlan.save().then(nPlan => {
        let data = {
            error: false,
            msg: "Plan Created Successfully",
            data: nPlan
        }
        RESPONDER.response(res, 200, data)
    }).catch(error => {
        let data = {
            error: true,
            msg: "Plan Creation UnSuccessful",
            data: {}
        }
        RESPONDER.response(res, 200, data)
    })
    

}

exports.deletePlan = (req, res, next) => {

    let deleteArgs = {
        _id: req.params._id
    }

    Plan.deleteOne(deleteArgs).then( deletedData => {
        if( deletedData.n > 0){

            let data = {
                error: false,
                msg: "Plan Deleted Successfully"
            }
            RESPONDER.response(res, 200, data)

        }else{

            let data = {
                error: true,
                msg: "Plan Deletion UnSuccessful"
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        let data = {
            error: true,
            msg: "Plan Deletion UnSuccessful",
        }
        RESPONDER.response(res, 200, data)
    })
    

}

exports.updatePlan = (req, res, next) => {

    let updateArgs = {
        title: req.body.title,
        price: +req.body.price,
        commision: +req.body.commision,
        duration: req.body.duration
    }

    Plan.updateOne({_id: req.params._id}, updateArgs).then(result => {
        if( result.n > 0){

            let data = {
                error: false,
                msg: "Plan Updated Successfully"
            }
            RESPONDER.response(res, 200, data)

        }else{

            let data = {
                error: true,
                msg: "Plan Updation UnSuccessful"
            }
            RESPONDER.response(res, 200, data)
        }
    }).catch(error => {
        let data = {
            error: true,
            msg: "Plan Updation UnSuccessful",
        }
        RESPONDER.response(res, 200, data)
    })

}


exports.getAllPlans = (req, res, next) => {

    Plan.find({}).then( plans => {
        let data = {
            error: false,
            msg: "Plan Get Successfully",
            data: plans
        }
        RESPONDER.response(res, 200, data)
    }).catch(error => {
        let data = {
            error: true,
            msg: "Plan Get UnSuccessful",
            data: []
        }
        RESPONDER.response(res, 200, data)
    })
}

exports.getOnePlan = (req, res, next) => {

    Plan.findOne({_id: req.params._id}).then( plan => {
        let data = {
            error: false,
            msg: "Plan Get Successfully",
            data: plan
        }
        RESPONDER.response(res, 200, data)
    }).catch(error => {
        let data = {
            error: true,
            msg: "Plan Get UnSuccessful",
            data: []
        }
        RESPONDER.response(res, 200, data)
    })

}