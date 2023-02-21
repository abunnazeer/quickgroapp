const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please provide product name'],
  },
  description: {
    type: String,
    required: [true, 'please add description'],
  },
  price: {
    type: Number,
  },
  qty: {
    type: Number,
  },

  image: {
    type: String,
    required: [true, 'please upload image'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
