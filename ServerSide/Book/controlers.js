var mongoose = require("mongoose");
var User = mongoose.model("User");
var Book = mongoose.model("Book");

const create = (req, res) => {
  const UserID = req.query.user;
  const bookInfo = req.body.book;
  console.log(bookInfo);
  if (!UserID) {
    return res.status(422).send({ error: "user not found" });
  }
  if (!bookInfo) {
    return res.status(422).send({ error: "book info not found" });
  }
  if (!bookInfo.title) {
    return res.status(422).send({ error: "book title not provided" });
  }
  User.findOne({_id:UserID}).then(user=>{
    if (!user){
      return res.status(422).send({ error: "user not found" });
    }
    const book = new Book();
    book.owner = UserID;
    book.assignInfo(bookInfo);
    user.books.push(book._id);
    user.save();
    book.save(() => {
      res.status(202).send({
        book: book.toJSON(),
      });
    });
  })
  
};
const update = (req, res) => {
  const book = req.book;
  console.log(book);
  const UserID = req.query.user;
  const bookInfo = req.body.book;
  if (!book.owner.equals(UserID)) {
    return res.status(422).send({ error: "user not owner" });
  }
  if (req.file) {
    book.cover = req.file;
  }
  if (bookInfo) {
    book.assignInfo(bookInfo);
  }
  book.save(() => {
    res.status(202).send({
      book: book.toJSON(),
    });
  });
};
const fetchBook = (req, res) => {
  const book = req.book;
  res.status(202).send({
    book: book.toJSON(),
  });
};
const feed = (req, res) => {
  Book.find({},{}).then((books) => {
    res.status(202).send({
      feed:books,
    });
  });
};

const BookControler = {
  create,
  fetchBook,
  feed,
  update,
};

module.exports = BookControler;
