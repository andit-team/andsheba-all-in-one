const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema = mongoose.Schema
const CategorySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'categories'
    }
},
{
    timestamps: true
})
CategorySchema.plugin(mongoosePaginate)
const Category = mongoose.model('categories', CategorySchema)
module.exports = Category