'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TownSchema = new Schema({
  TownName: {
    type: String,
    unique: true
  },
  PosX: {
    type: Number
  },
  PosY: {
    type: Number
  },
  Log: {
    type: String
  },
  Faction:{
    type: String
  },
  Buildings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Building'
  }],
  Weather: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Weather'
  },
  Market: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

module.exports = mongoose.model('Town', TownSchema );
