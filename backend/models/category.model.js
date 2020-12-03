const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    }
})

const Category = mongoose.model('categories', CategorySchema)
module.exports = Category