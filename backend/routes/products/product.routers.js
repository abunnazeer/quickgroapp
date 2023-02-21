const express = require('express');
const { protect } = require('../user/user.controller');
const { addProduct, addCategory } = require('./product.controller');

const router = express();
router.post('/add-product', addProduct);
router.post('/add-category', addCategory);

module.exports = router;
