const articleModel = require('../models/article');

class articleController {
  
  static getAll (req,res) {
    articleModel.find({})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

  static create (req,res) {
    articleModel.create({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      category: req.body.category || 'none',
      creator: req.headers.email
    })
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

  static update (req, res) {
    articleModel.findOneAndUpdate({_id: req.params.id}, { $set: {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image
    }}, {new:true})
      .then(data => res.send(data))
      .catch(error => res.send(error))
  }

  static getByAuthor (req,res) {
    articleModel.find({creator: req.body.author})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

  static getByCategory (req,res) {
    articleModel.find({category: req.body.category})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

}

module.exports = articleController;