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
    status:{
        type: String
    },
    registration_ip:{
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
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plans',
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
    },
    division: {
        type: String
    },
    district: {
      type: String
    },
    residential_or_municipal: {
        type: String
    },
    municipal: {
      type: String
    },
    ward: {
      type: String
    },
    upazila: {
      type: String
    },
    union: {
      type: String
    },
    village: {
      type: String
    },
},
{
    timestamps: true
})

const User = mongoose.model('Users', UserSchema)
module.exports = User