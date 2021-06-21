'use strict';

var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var moment = require('moment');




exports.list_all_products = function(req, res) {
  Product.find({}, function(err, Product) {
    if (err)
      return res.send(err);
    res.json(Product);
  })
  .select('-_id -__v');
};


exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);
  console.log(new_product);
  new_product.save(function(err, Product) {
    if (err)
      res.send(err);
    res.json(Product);
  });
};

exports.find_by_product_name = function(req, res) {
  Product.find({'ProductName': req.params.productName}, function(err, product) {
    console.log(product.length);
    if (err)
      return res.send(err);
    if(product == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(product);
    }
  })
  .select('-_id -__v');
};

exports.find_by_product_id = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    console.log(product.length);
    if (err)
      return res.send(err);
    if(product == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(product);
    }
  });
};

exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({_id:req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      return res.send(err);
    res.json(product);
  });
};
// Product.remove({}).exec(function(){});
exports.delete_a_product = function(req, res) {

  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      return res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};
