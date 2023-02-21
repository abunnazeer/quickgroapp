const mongoose = require('mongoose');
// const validator = require('validator');

const ProductCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide product name'],
    unique: true,
  },
});

module.exports = mongoose.model('ProductCategory', ProductCategorySchema);
