var express = require('express');
var router = express.Router();
var user = require('../controllers/UserController');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.render('users');
});*/

router.get('/', user.list_all_users);
router.get('/:username', user.find_by_username);
router.get('/:username/towns', user.find_town_by_username);


router.post('/', user.create_a_user);
router.post('/:username', user.update_a_user);

module.exports = router;
