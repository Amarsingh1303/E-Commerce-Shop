const express = require("express");
const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");
const orderRouter = express.Router();

orderRouter.post("/", auth.checkAuthorization, orderController.addOrderItems);
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

module.exports = orderRouter;
