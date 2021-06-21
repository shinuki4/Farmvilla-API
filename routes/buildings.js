var express = require('express');
var router = express.Router();
var building = require('../controllers/BuildingController');

/* GET users listing. */
router.get('/', building.list_all_buildings);
router.get('/:buildingId', building.find_by_building_id);

router.post('/', building.create_a_building);
router.post('/:buildingId', building.update_a_building);

module.exports = router;
