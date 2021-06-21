'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeatherSchema = new Schema({
  WeatherId:{
    type: Number
  },
  WeatherName: {
    type: String,
    unique: true
  },
  Effect: {
    type: Number
  },
  Duration: {
    type: Number
  }
});


module.exports = mongoose.model('Weather', WeatherSchema );
