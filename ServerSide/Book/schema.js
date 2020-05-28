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
    reacts: {
      heart: [
        {
          type: Number,
        },
      ],
      read_later: [
        {
          type: Number,
        },
      ],
      unicorn: [
        {
          type: Number,
        },
      ],
      star: [
        {
          type: Number,
        },
      ],
    },
    comments: [
      {
        owner: { type: mongoose.Types.ObjectId, ref: "User" },
        text: { type: String },
      },
    ],
    genre: { type: String },
  },
  { timestamps: true }
);

BookSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    genre: this.genre,
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

BookSchema.methods.addComment = function (info,owner) {
  if (!this.comments) {
    this.comments = [];
  }
  this.comments.push({
    text:info.textm,
    owner
  })
};

BookSchema.methods.addreact = function (info) {};

module.exports = BookSchema = mongoose.model("Book", BookSchema);
