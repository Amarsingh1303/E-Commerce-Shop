const express = require("express");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const uploadRouter = require("./routes/uploadRoutes");
const error = require("./middleware/errorMiddleware");
const PORT = 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads/images", express.static(path.join("uploads" + "images")));

app.get("/api/", (req, res) => {
  res.send("server running");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(error.notFound);

app.use(error.errorHandler);

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `server running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  );
});
