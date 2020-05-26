const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const bookParams = (req, res, next, _id) => {
  Book.findOne({ _id: _id })
    .then((book) => {
      if (!book) {
        return res.sendStatus(404);
      }
      req.book = book;
      return next();
    })
    .catch(next);
};

const bookgenre = (req, res, next, genre) => {
  Book.find({ genre: genre })
    .then((books) => {
      console.log(genre)
      if (!books) {
        return res.sendStatus(404);
      }
      return res.status(202).send({
        feed:books
      })
    })
    .catch(next);
};



module.exports = {bookParams,bookgenre};
