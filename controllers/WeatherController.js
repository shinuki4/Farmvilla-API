'use strict';

var mongoose = require('mongoose');
var Weather = mongoose.model('Weather');
var moment = require('moment');




exports.list_all_weathers = function(req, res) {
  Weather.find({}, function(err, Weather) {
    if (err)
      return res.send(err);
    res.json(Weather);
  })
  .select('-_id -__v');
};


exports.create_a_weather = function(req, res) {
  var new_weather = new Weather(req.body);
  console.log(new_weather);
  new_weather.save(function(err, Weather) {
    if (err)
      res.send(err);
    res.json(Weather);
  });
};

exports.find_by_weather_name = function(req, res) {
  Weather.find({'WeatherName': req.params.weatherName}, function(err, weather) {
    console.log(weather.length);
    if (err)
      return res.send(err);
    if(weather == 0) {
      res.status(404).json({message:'not found'});
    }else {
      res.json(weather);
    }
  })
  .select('-_id -__v');
};

exports.update_a_weather = function(req, res) {
  Weather.findOneAndUpdate({WeatherName:req.params.weatherName}, req.body, {new: true}, function(err, weather) {
    if (err)
      return res.send(err);
    res.json(weather);
  });
};
// Weather.remove({}).exec(function(){});
exports.delete_a_weather = function(req, res) {

  Weather.remove({
    _id: req.params.weatherId
  }, function(err, weather) {
    if (err)
      return res.send(err);
    res.json({ message: 'Weather successfully deleted' });
  });
};
