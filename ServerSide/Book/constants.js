const Routes = {
  create: "/books/",
  fetch: "/books/:book/",
  comment: "/books/:book/comment",
  react:"/books/:book/react",
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
