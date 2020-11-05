const asyncHandler = require("express-async-handler");
const Product = require("../models/product-model");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductsById = asyncHandler(async (req, res) => {
  const result = await Product.findById(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

module.exports.getProducts = getProducts;
module.exports.getProductsById = getProductsById;
