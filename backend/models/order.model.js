/**
 * Order Model-----------------------
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderSchema = new Schema({
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'services',
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },
    pro: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    customer: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    answered_questions: [
        {
            title: String,
            question_type: String,
            answers: [{
                answer_title_or_unit: String,
                price: Number,
            }]
            
        }
    ],
    images: [{
        type: String
    }
    ],
    total: {
        type: Number
    },
    sub_total: {
        type: Number
    },
    status: {
        type: String
    },
    approved_by_customer: {
        type: Boolean
    },
    approved_by_pro: {
        type: Boolean
    },
    division: {
        type: String,
    },
    district: {
      type: String,
    },
    municipal: {
      type: String,
    },
    ward: {
      type: String,
    },
    upazila: {
      type: String,
    },
    union: {
      type: String,
    },
    village: {
      type: String,
    },
    message: {
        type: String
    }
},
{
    timestamps: true
})

const Orders = mongoose.model('Orders', OrderSchema)
module.exports = Orders