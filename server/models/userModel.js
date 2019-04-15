const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {hash} = require('../helper/bcrypt')

let userSchema = new Schema({
  name: {
    type: String,
    required : [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address.'],
    validate: {
      validator: function (value) {
        return User.findOne({
          email: value,
          _id: { $ne: this._id }
        })
        .then(user => {
          if(user) {
            throw 'Email has been used'
          }
        })
        .catch(err => { 
          throw err
        })
      }
    }
  },
  password: {
    type: String,
    required: [true, 'email is required'],
    minlength: [6, 'Password must be 6 character']
  }
})

userSchema.pre('save', function(next) {
  this.password = hash(this.password)
  next()
})

let User = mongoose.model('user', userSchema)

module.exports = User

