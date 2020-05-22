var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema(
  {
    title:{},
    author:{},
    reviews:{},
    brief:{},
    owner:{},
    cover:{}
  },
  { timestamps: true }
);


module.exports = BookSchema = mongoose.model("Book", BookSchema);
