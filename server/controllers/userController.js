const User = require('../models/userModel')
const { compare } = require('../helper/bcrypt')
const { sign, verify } = require('../helper/jwt')

class UserController {
  static create(req, res) {
    User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      .then(user => {
        res.status(201).json(user)
      })
      .catch(error => {
        res.status(500).json(error)
      })
  }

  static login(req, res) {
    console.log(req.body)
    User
      .findOne({
        email: req.body.email
      })
      .then(user => {
        console.log(user)
        if (user) {
          if (compare(req.body.password, user.password)) {
            let payload = {
              id: user._id
            }

            let token = sign(payload)
            // console.log(token)
            res.status(200).json({
              msg: 'You Are Success Login',
              accessToken: token
            })
          } else {
            res.status(400).json({
              msg: 'Invalid password / email'
            })
          }
        } else {
          res.status(400).json({
            msg: 'Invalid email / password'
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController