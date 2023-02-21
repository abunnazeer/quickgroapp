const Product = require('../../models/farmers/product.model');
const Category = require('../../models/farmers/product.cat.model');
const catchAsync = require('../../utils/catchAsync');
// Registration endpoint
const addProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    qty: req.body.qty,
    image: req.body.image,
    category: req.category,
  });
  //   const token = signToken(newUser._id);
  res.status(201).json({
    status: 'Product created successfully',
    // token,
    data: {
      product: newProduct,
    },
  });
});

const addCategory = catchAsync(async (req, res, next) => {
  const newCategory = await Category.create({
    name: req.body.name,
  });
  //   const token = signToken(newUser._id);
  res.status(201).json({
    status: 'Category created successfully',
    // token,
    data: {
      category: newCategory,
    },
  });
});

module.exports = {
  addProduct,
  addCategory,
};
