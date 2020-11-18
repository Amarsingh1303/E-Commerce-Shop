const express = require("express");
const userRoutes = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.post("/", userRoutes.registerUser);
userRouter.get("/", auth.checkAuthorization, auth.admin, userRoutes.getUsers);
userRouter.get(
  "/:id",
  auth.checkAuthorization,
  auth.admin,
  userRoutes.getUserById
);
userRouter.put(
  "/:id",
  auth.checkAuthorization,
  auth.admin,
  userRoutes.updateUser
);
userRouter.post("/login", userRoutes.authUser);
userRouter.get("/profile", auth.checkAuthorization, userRoutes.getUserProfile);
userRouter.put(
  "/profile",
  auth.checkAuthorization,
  userRoutes.updateUserProfile
);
userRouter.delete(
  "/:id",
  auth.checkAuthorization,
  auth.admin,
  userRoutes.deleteUser
);

module.exports = userRouter;
