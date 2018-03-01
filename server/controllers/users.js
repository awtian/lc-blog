const userModel = require('../models/user');

class UserController {
  
  static getAll (req,res) {
    userModel.find({})
      .then(data => res.send(data))
      .catch(err => console.log(err))
  }
  
  static findOrCreate (req,res) {
    userModel.findOneOrCreate(req.body.token, (jwt, user) => {
      res.send({jwt: jwt, user: user})
    })
  }

}

module.exports = UserController;