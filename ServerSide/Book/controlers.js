var mongoose = require("mongoose");
var User = mongoose.model("User");
var Book = mongoose.model("Book");

const create = (req, res) => {};
const update = (req, res) => {};
const feed = (req, res) => {};
const fetch = (req, res) => {};

const BookControler = {
  create,
  fetch,
  feed,
  update,
};

module.exports = BookControler;
