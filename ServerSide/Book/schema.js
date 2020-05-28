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
      heart: [],
      read_later: [],
      unicorn: [],
      star: [],
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
    comments: this.comments,
    reacts: this.reacts,
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
    text: info.text,
    owner,
  });
};
BookSchema.methods.initializeProp = function (prop) {
  switch (prop) {
    case "reacts":
      if (this["reacts"]) {
        return;
      }
      this["reacts"] = [];
      this.reacts.read_later = [];
      this.reacts.star = [];
      this.reacts.unicorn = [];
      this.reacts.heart = [];
      return;
    case "comments":
      if (this["comments"]) {
        return;
      } else {
        this["comments"] = [];
        return;
      }
  }
};

BookSchema.methods.addReact = function (info, owner) {
  this.initializeProp("reacts");
  switch (info) {
    case "heart":
      this.reacts.heart.push(owner);
      return;
    case "read_later":
      this.reacts.read_later.push(owner);
      return;
    case "unicorn":
      this.reacts.unicorn.push(owner);
      return;
    case "star":
      this.reacts.star.push(owner);
      return;
    default:
      return;
  }
};

module.exports = BookSchema = mongoose.model("Book", BookSchema);
