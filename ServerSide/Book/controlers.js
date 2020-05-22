var mongoose = require("mongoose");
var User = mongoose.model("User");
var Book = mongoose.model("Book");

const create = (req, res) => {
  const UserID = req.query.user;
  const bookInfo = req.body.book;
  const book = new Book();
  book.assignInfo(bookInfo);
  book.save(()=>{
      res.status(202).send({
          book:book.toJSON()
      })
  })
};
const update = (req, res) => {
  const book = req.book;
};
const feed = (req, res) => {};
const fetch = (req, res) => {
  const book = req.book;
};

const BookControler = {
  create,
  fetch,
  feed,
  update,
};

module.exports = BookControler;
