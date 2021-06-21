'use strict';

var mongoose = require('mongoose');
var Town = mongoose.model('Town');
var moment = require('moment');




exports.list_all_towns = function(req, res) {
  Town.find({}, function(err, Town) {
    if (err)
      return res.send(err);
    res.json(Town);
  });
};


exports.create_a_town = function(req, res) {
  var new_town = new Town(req.body);
  console.log(new_town);
  new_town.save(function(err, Town) {
    if (err)
      res.send(err);
    res.json(Town);
  });
};

exports.find_by_town_name = function(req, res) {
  Town.find({'TownName': req.params.townName}, function(err, town) {
    console.log(town.length);
    if (err)
      return res.send(err);
    if(town == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(town);
    }
  });
};

exports.find_by_positions = function(req, res) {
  Town.find({'PosX': req.param('posX'), 'PosY': req.param('posY')}, function(err, town) {
    console.log(town.length);
    if (err)
      return res.send(err);
    if(town == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(town);
    }
  });
};

exports.find_buildings_by_town_name = function(req, res) {
  Town.find({'TownName': req.params.townName}, function(err, town) {
    console.log(town.length);
    if (err)
      return res.send(err);
    if(town == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(town);
    }
  })
  .select('Buildings')
  .populate('Buildings');
};

exports.update_a_town = function(req, res) {
  Town.findOneAndUpdate({TownName:req.params.townName}, req.body, {new: true}, function(err, town) {
    if (err)
      return res.send(err);
    res.json(town);
  });
};
// Town.remove({}).exec(function(){});
exports.delete_a_town = function(req, res) {

  Town.remove({
    _id: req.params.townId
  }, function(err, town) {
    if (err)
      return res.send(err);
    res.json({ message: 'Town successfully deleted' });
  });
};
