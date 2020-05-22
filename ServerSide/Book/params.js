const mongoose = require("mongoose");
const Book = mongoose.model("User");

const bookParams = (req, res, next, id) => {
  Book.findById(id)
    .then(function (book) {
      if (!book) {
        return res.sendStatus(404);
      }
      req.book = book;
      return next();
    })
    .catch(next);
};

module.exports = bookParams;
