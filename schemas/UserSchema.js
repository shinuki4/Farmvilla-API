'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Username: {
    type: String,
    unique: true
  },
  Password: {
    type: String
  },
  Gold: {
    type: Number
  },
  GoldLog: {
    type: String
  },
  Towns: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Town'
  }]
});


module.exports = mongoose.model('User', UserSchema );
