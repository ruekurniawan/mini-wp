const {verify} = require('../helper/jwt')
const User = require('../models/userModel')

module.exports = {
  Authentication : function(req,res, next) {
    try {
      let token = req.headers.token
      if(token) {
        let decode = verify(token)
        req.authenticate = decode
        // console.log(req.authenticate)

        User
          .findOne({
            _id: req.authenticate.id
          })
          .then(user => {
            if(user) {
              req.user = user
              next()
            } else {
              res.status(500).json({
                msg: 'Cant Access This page'
              })
            }
          })
      } else {
        res.status(400).json({
          msg: 'UnAuthorized'
        })
      }
    } catch (error) {
      res.status(400).json({
        msg: 'Invalid User'
      }) 
    }
  }
}