const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();
const { router } = require("./visitors");

const errorHandler = (err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
};

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api", router);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});
app.use(errorHandler);

module.exports = app;
