var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Database Schema
var User = require('./schemas/UserSchema');
var Town = require('./schemas/TownSchema');
var Building = require('./schemas/BuildingSchema');
var Product = require('./schemas/ProductSchema');
var Weather = require('./schemas/WeatherSchema');

//Route
var index = require('./routes/index');
var users = require('./routes/users');
var towns = require('./routes/towns');
var buildings = require('./routes/buildings');
var products = require('./routes/products');
var weathers = require('./routes/weathers');

//set db connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/farmvillage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//setting routes
app.use('/', index);
app.use('/users', users);
app.use('/towns', towns);
app.use('/buildings', buildings);
app.use('/products', products);
app.use('/weathers', weathers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
