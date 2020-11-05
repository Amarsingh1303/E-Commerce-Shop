const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const error = require("./middleware/errorMiddleware");
const PORT = 5000;

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("server running");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use(error.notFound);

app.use(error.errorHandler);

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `server running on ${process.env.NODE_ENV} mode on ${process.env.PORT}`
  );
});
