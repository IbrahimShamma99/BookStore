var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema(
  {
    title: {},
    author: {},
    reviews: {},
    brief: {},
    owner: {},
    cover: {
      fieldname: String,
      originalname: String,
      encoding: String,
      mimetype: String,
      destination: String,
      filename: String,
      path: String,
      size: Number,
    },
  },
  { timestamps: true }
);

module.exports = BookSchema = mongoose.model("Book", BookSchema);
