const express = require("express");

const router = express.Router();

router.post("/visitors", async (req, res, next) => {
  res.send({ message: "POST request to the homepage" });
});

module.exports = { router };
