const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  created_at: {
    type: Date,
    default: new Date
    
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  featured_image: String
})

let Article = mongoose.model('article', articleSchema)

module.exports = Article