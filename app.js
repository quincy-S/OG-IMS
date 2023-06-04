const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const middleware = require("./utils/middleware");
const loginRouter = require("./routes/login");
const ordersRouter = require("./routes/orders");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");

mongoose.set("strictQuery", false);

logger.info(`connecting to ${config.MONGODB_URI}`);

mongoose
  .connect(config.MONGODB_URI)
  .then((result) => {
    logger.info(`connected to MongoDB`);
  })
  .catch((error) =>
    logger.error(`Error connecting to MongoDB, ${error.message}`)
  );

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use("/api/login", loginRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/users", usersRouter);

app.use(middleware.errorHandler);

module.exports = app;
