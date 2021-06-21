'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');
var moment = require('moment');




exports.list_all_users = function(req, res) {
  User.find({}, function(err, User) {
    if (err)
      return res.send(err);
    res.json(User);
  })
  .select('-_id -__v')
};


exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.GoldLog= moment().format('DD/MM/YYYY H:mm:ss');
  console.log(new_user);
  new_user.save(function(err, User) {
    if (err)
      res.send(err);
    res.json(User);
  });
};

exports.find_by_username = function(req, res) {
  User.find({'Username': req.params.username}, function(err, user) {
    console.log(user.length);
    if (err)
      return res.send(err);
    if(user == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(user);
    }
  })
  .select('-_id -__v -Towns')
};

exports.find_town_by_username = function(req, res) {
  User.find({'Username': req.params.username}, function(err, user) {
    console.log(user.length);
    if (err)
      return res.send(err);
    if(user == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(user);
    }
  })
  .select('-_id -__v')
  .populate('Towns', '-_id -__v')
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({Username:req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      return res.send(err);
    res.json(user);
  });
};
// User.remove({}).exec(function(){});
exports.delete_a_user = function(req, res) {

  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      return res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
