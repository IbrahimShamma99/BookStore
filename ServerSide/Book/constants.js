const Routes = {
  create: "/books/",
  fetch: "/books/:book/",
  update: "/books/:book/update/",
  feed: "/books/feed/",
  base:"/"
};

const params = {
  book: "book",
};

module.exports = { Routes, params };
