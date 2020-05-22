const Routes = {
  create: "/books",
  fetch: "/books/:book",
  update:"/books/:book/update"
};

const params = {
  book: "book",
};

module.exports = { Routes, params };
