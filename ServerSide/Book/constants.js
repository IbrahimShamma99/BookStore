const Routes = {
  create: "/books/",
  fetch: "/books/:book/",
  update: "/books/:book/update/",
  feed: "/books/feed/",
  genre: "/books/feed/:genre",
  base:"/"
};

const params = {
  book: "book",
  genre: "genre"
};

module.exports = { Routes, params };
