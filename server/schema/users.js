var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  favorites: Array
});

var Users = mongoose.model('users', userSchema);

module.exports = Users;
