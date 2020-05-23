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

module.exports = bookParams;
