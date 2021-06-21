'use strict';

var mongoose = require('mongoose');
var Building = mongoose.model('Building');
var moment = require('moment');




exports.list_all_buildings = function(req, res) {
  Building.find({}, function(err, Building) {
    if (err)
      return res.send(err);
    res.json(Building);
  });
};


exports.create_a_building = function(req, res) {
  var new_building = new Building(req.body);
  console.log(new_building);
  new_building.save(function(err, Building) {
    if (err)
      res.send(err);
    res.json(Building);
  });
};

exports.find_by_building_name = function(req, res) {
  Building.find({'BuildingName': req.params.buildingName}, function(err, building) {
    console.log(building.length);
    if (err)
      return res.send(err);
    if(building == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(building);
    }
  });
};

exports.find_by_building_id = function(req, res) {
  Building.findById(req.params.buildingId, function(err, building) {
    console.log(building.length);
    if (err)
      return res.send(err);
    if(building == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(building);
    }
  });
};

exports.find_by_building_name = function(req, res) {
  Building.find({'BuildingName': req.params.buildingName}, function(err, building) {
    console.log(building.length);
    if (err)
      return res.send(err);
    if(building == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(building);
    }
  });
};

exports.update_a_building = function(req, res) {
  Building.findOneAndUpdate({_id:req.params.buildingId}, req.body, {new: true}, function(err, building) {
    if (err)
      return res.send(err);
    res.json(building);
  });
};
// Building.remove({}).exec(function(){});
exports.delete_a_building = function(req, res) {

  Building.remove({
    _id: req.params.buildingId
  }, function(err, building) {
    if (err)
      return res.send(err);
    res.json({ message: 'Building successfully deleted' });
  });
};
