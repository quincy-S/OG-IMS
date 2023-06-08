const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const loginRouter = require("./routes/login");
const ordersRouter = require("./routes/orders");
const vendorsRouter = require("./routes/vendors");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    logger.info(`connected to MongoDB`);
  })
  .catch((error) =>
    logger.error(`Error connecting to MongoDB, ${error.message}`)
  );

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/users", usersRouter);
app.use("/api/vendors", vendorsRouter);

app.use(middleware.errorHandler);

module.exports = app;
