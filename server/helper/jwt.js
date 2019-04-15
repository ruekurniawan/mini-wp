const jwt = require('jsonwebtoken')

module.exports ={
  sign(payload) {
    let token = jwt.sign(payload, process.env.JWT_TOKEN)
    return token
  }, 

  verify(token) {
    let decode = jwt.verify(token, process.env.JWT_TOKEN)
    return decode
  }
}