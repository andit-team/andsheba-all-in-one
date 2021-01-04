/**
 * District Model-----------------------
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
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    answered_questions: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            title: String,
            question_type: String,
            answer: {
                _id: mongoose.Schema.Types.ObjectId,
                answer_title_or_unit: String,
                price: Number,
            }
            
        }
    ]
})

const Orders = mongoose.model('Orders', OrderSchema)
module.exports = Orders