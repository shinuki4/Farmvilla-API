var express = require('express');
var router = express.Router();
var product = require('../controllers/ProductController');

/* GET users listing. */
router.get('/', product.list_all_products);
router.get('/:productId', product.find_by_product_id);

router.post('/', product.create_a_product);
router.post('/:productId', product.update_a_product);

module.exports = router;
