var mongoose = require("mongoose");
var User = mongoose.model("User");
var Book = mongoose.model("Book");

const create = (req, res) => {
  const UserID = req.query.user;
  const bookInfo = req.body.book;
  if (!UserID) {
    return res.status(422).send({ error: "user not found" });
  }
  if (!bookInfo) {
    return res.status(422).send({ error: "book info not found" });
  }
  if (!bookInfo.title) {
    return res.status(422).send({ error: "book title not provided" });
  }
  const book = new Book();
  book.assignInfo(bookInfo);
  book.save(() => {
    res.status(202).send({
      book: book.toJSON(),
    });
  });
};
const update = (req, res) => {
  const book = req.book;
  const user = req.query.UserID;
  const bookInfo = req.body.book;
  if (!book.owner.equals(user)) {
    /*Not owner*/
  }
  if (req.file) {
    book.cover = req.file;
  }
  book.assignInfo(bookInfo);
  book.save(() => {
    res.status(202).send({
      book: book.toJSON(),
    });
  });
};
const fetch = (req, res) => {
  const book = req.book;
  res.status(202).send({
    book: book.toJSON(),
  });
};
const feed = (req, res) => {};

const BookControler = {
  create,
  fetch,
  feed,
  update,
};

module.exports = BookControler;
