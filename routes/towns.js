var express = require('express');
var router = express.Router();
var town = require('../controllers/TownController');

/* GET users listing. */
router.get('/', town.list_all_towns);
router.get('/positions',town.find_by_positions);
router.get('/:townName', town.find_by_town_name);
router.get('/:townName/buildings', town.find_buildings_by_town_name);

router.post('/', town.create_a_town);
router.post('/:townName', town.update_a_town);

module.exports = router;
