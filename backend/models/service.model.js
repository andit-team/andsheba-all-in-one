/**
 * User Services Model-----------------------
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ServiceSchema = new Schema({
    title: {
        type:String
    },
    description: {
        type:String
    },
    thumb: {
        type:String
    },
    user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:true
    },
    location: {
        type: { type: String },
        coordinates: []
    },
    address: {
        type: Object
    },
    category:{
        _id: mongoose.Schema.Types.ObjectId,
        name: String
    },
    ratings:[
        {
            rate: Number,
            comment: String,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users',
            },
            date: Date
        }
    ],
    questions: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            title: String,
            question_type: String,
            answers: [
                {
                    _id: mongoose.Schema.Types.ObjectId,
                    answer_title_or_unit: String,
                    price: Number,
                }
            ]
        }
    ],
    status: {
        type: String
    }
    
},
{
    timestamps: true
})

ServiceSchema.index({ location: "2dsphere" })
const Services = mongoose.model('services', ServiceSchema)
module.exports = Services