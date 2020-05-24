var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: {},
    reviews: [
      {
        writer: { type: String },
        body: { type: String },
      },
    ],
    brief: { type: String },
    owner: { type: mongoose.Types.ObjectId, ref: "User" },
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

BookSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    title: this.title,
    author: this.author,
    brief: this.brief,
    reviews: this.reviews,
    owner: this.owner,
    cover: this.cover,
  };
};
BookSchema.methods.assignInfo = function (info) {
  Object.keys(info).map((key) => {
    if (key === "cover") {
      return;
    }
    if (key === "_id") {
      return;
    }
    this[key] = info[key];
  });
};

module.exports = BookSchema = mongoose.model("Book", BookSchema);
