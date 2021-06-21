var express = require('express');
var router = express.Router();
var weather = require('../controllers/WeatherController');


router.get('/', weather.list_all_weathers);
router.get('/:weatherName', weather.find_by_weather_name);

router.post('/', weather.create_a_weather);
router.post('/:weatherName', weather.update_a_weather);

module.exports = router;
