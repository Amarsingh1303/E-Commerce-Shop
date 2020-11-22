const express = require("express");

const productController = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");
const productRouter = express.Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/top", productController.getTopProducts);
productRouter.post(
  "/",
  auth.checkAuthorization,
  auth.admin,
  productController.createProduct
);
productRouter.post(
  "/:id/reviews",
  auth.checkAuthorization,
  productController.createProductReview
);

productRouter.get("/:id", productController.getProductsById);
productRouter.put(
  "/:id",
  auth.checkAuthorization,
  auth.admin,
  productController.updateProduct
);

productRouter.delete(
  "/:id",
  auth.checkAuthorization,
  auth.admin,
  productController.deleteProduct
);

module.exports = productRouter;
