'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  ProductName: {
    type: String,
    unique: true
  },
  Quantity: {
    type: Number
  },
  Price: {
    type: Number
  },
  Log: {
    type: String
  }
});


module.exports = mongoose.model('Product', ProductSchema );
