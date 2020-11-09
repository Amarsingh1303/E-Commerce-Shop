const express = require("express");
const orderController = require("../controllers/orderController");
const checkAuthorization = require("../middleware/authMiddleware");
const orderRouter = express.Router();

orderRouter.post("/", checkAuthorization, orderController.addOrderItems);
orderRouter.get("/myorders", checkAuthorization, orderController.getMyOrder);
orderRouter.get("/:id", checkAuthorization, orderController.getOrderById);
orderRouter.put(
  "/:id/pay",
  checkAuthorization,
  orderController.updateOrderToPaid
);

module.exports = orderRouter;
