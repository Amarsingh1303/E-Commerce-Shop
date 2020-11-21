const express = require("express");

const productController = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");
const productRouter = express.Router();

productRouter.get("/", productController.getProducts);
productRouter.post(
  "/",
  auth.checkAuthorization,
  auth.admin,
  productController.createProduct
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
