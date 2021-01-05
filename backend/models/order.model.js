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
            _id: mongoose.Schema.Types.ObjectId,
            title: String,
            question_type: String,
            answers: [{
                _id: mongoose.Schema.Types.ObjectId,
                answer_title_or_unit: String,
                price: Number,
            }]
            
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