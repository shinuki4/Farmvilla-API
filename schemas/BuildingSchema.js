'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BuildingSchema = new Schema({
  BuildingName: {
    type: String,
  },
  Level: {
    type: Number
  },
  Output: {
    type: Number
  },
  Type: {
    type: String
  },
  Stock:{
    type: Number
  }
});


module.exports = mongoose.model('Building', BuildingSchema );
