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
    articleModel.findOneAndUpdate({_id: req.params.id, author: req.params.email}, { $set: {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      category: req.body.category
    }}, {new:true})
      .then(data => res.send(data))
      .catch(error => res.send(error))
  }
  
  static delete (req, res) {
    articleModel.findOneAndRemove({_id: req.params.id, author: req.params.email})
      .then(data => res.send({deleted: req.params.id}))
      .catch(error => res.send(error))
  }

  static getByAuthor (req, res) {
    articleModel.find({creator: req.params.search})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

  static getByCategory (req, res) {
    articleModel.find({category: req.params.search})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }

}

module.exports = articleController;