/**
 * Admin Model-----------------------
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AdminSchema = new Schema({
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
    role: {
        type: String
    }
},
{
    timestamps: true
})

const Admin = mongoose.model('Admins', AdminSchema)
module.exports = Admin