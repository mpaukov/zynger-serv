const { Schema, model } = require("mongoose");

const visitorsSchema = Schema({
  date: {
    type: String,
  },
  href: {
    type: String,
  },
  referrer: {
    type: String,
  },
  ip: {
    type: String,
  },
});

const Visitors = model("visitors", visitorsSchema);

module.exports = {
  Visitors,
};
