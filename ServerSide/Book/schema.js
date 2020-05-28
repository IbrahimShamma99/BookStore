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

BookSchema.methods.addComment = function (info, owner) {
  this.initializeProp("comments");
  this.comments.push({
    text: info.textm,
    owner,
  });
};
BookSchema.methods.initializeProp = function (prop) {
  switch (prop) {
    case "react":
      this["react"] = [];
      this.reacts.read_later = [];
      this.reacts.star = [];
      this.reacts.unicorn = [];
      this.reacts.heart = [];
    case "comments":
      if (this["comments"]) {
        return;
      } else {
        this["comments"] = [];
      }
  }
};

BookSchema.methods.addReact = function (info, owner) {
  switch (info) {
    case "heart":
      this.reacts.heart.push(owner);
    case "read_later":
      this.reacts.read_later.push(owner);
    case "unicorn":
      this.reacts.unicorn.push(owner);
    case "unicorn":
      this.reacts.unicorn.push(owner);
    default:
      return;
  }
};

module.exports = BookSchema = mongoose.model("Book", BookSchema);
