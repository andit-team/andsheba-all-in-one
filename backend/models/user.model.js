/**
 * User Model-----------------------
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    wallet_balance: {
        type: Number
    },
    picture:{
        type: String
    },
    date_of_birth:{
        type: String
    },
    gender:{
        type: String
    },
    description:{
        type: String
    },
    last_visited_at:{
        type: Date
    },
    last_visited_from:{
        type: String
    },
    status:{
        type: String
    },
    registration_ip:{
        type: String
    },
    zip_code:{
        type: String
    },
    // Service Pro-------------------------
    nid_no:{
        type: String
    },
    nid_img:{
        type: String
    },
    location: {
        type: { type: String },
        coordinates: []
    },
    address: {
        type: Object
    },
    business_goal:{
        type: String
    },
    rej_desc:{
        type: String
    },
    // Agency-----------------------------
    trade_license_no:{
        type: String
    },
    trade_license_img:{
        type: String
    },
    manpower_number:{
        type: Number
    },
    per_manpower_value:{
        type: Number
    },
    minimum_service_unit:{
        type: Number
    },
    deleted_at: {
        type: Date
    }
},
{
    timestamps: true
})

const User = mongoose.model('Users', UserSchema)
module.exports = User