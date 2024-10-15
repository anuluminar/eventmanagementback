const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    }
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  googleId: {
    type: String,
    unique: true,
  }
});

const users = mongoose.model('users', userSchema);

module.exports = users;
