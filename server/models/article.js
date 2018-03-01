const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  image: String,
  creator: String,
  category: String
})


module.exports = mongoose.model('Article', articleSchema)