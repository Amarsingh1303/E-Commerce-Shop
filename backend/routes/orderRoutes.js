const express = require("express");
const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");
const orderRouter = express.Router();

orderRouter.post("/", auth.checkAuthorization, orderController.addOrderItems);
orderRouter.get(
  "/",
  auth.checkAuthorization,
  auth.admin,
  orderController.getOrder
);
orderRouter.get(
  "/myorders",
  auth.checkAuthorization,
  orderController.getMyOrder
);
orderRouter.get("/:id", auth.checkAuthorization, orderController.getOrderById);
orderRouter.put(
  "/:id/pay",
  auth.checkAuthorization,
  orderController.updateOrderToPaid
);
orderRouter.put(
  "/:id/deliver",
  auth.checkAuthorization,
  auth.admin,
  orderController.updateOrderToDelivered
);

module.exports = orderRouter;
