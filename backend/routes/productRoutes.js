const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/product-model");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const result = products.find((product) => product._id === req.params.id);
    const result = await Product.findById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  })
);

module.exports = router;
