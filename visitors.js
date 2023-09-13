const express = require("express");
const { Visitors } = require("./visitorsSchema");

const router = express.Router();

router.post("/visitors", async (req, res, next) => {
  const data = { ...req.body };
  await Visitors.create(data);
  res.send({ message: "POST request to the homepage" });
});

module.exports = { router };
