const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  rol: String,
  account: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
