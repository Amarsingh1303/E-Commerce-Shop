const express = require("express");
const userRoutes = require("../controllers/userController");
const checkAuthorization = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.post("/", userRoutes.registerUser);
userRouter.post("/login", userRoutes.authUser);
userRouter.get("/profile", checkAuthorization, userRoutes.getUserProfile);
userRouter.put("/profile", checkAuthorization, userRoutes.updateUserProfile);

module.exports = userRouter;
