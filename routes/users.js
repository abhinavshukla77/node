const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/abhinavshukla');

let userschema = mongoose.Schema({
  vichar : String
});

module.exports = mongoose.model('user',userschema);