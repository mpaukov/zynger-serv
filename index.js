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

const mongoose = require("mongoose");

const { DB_HOST, PORT = 4000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful.");
    app.listen(PORT, () => {
      console.log(`Server running. Use API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
