const Routes = {
  base: "/",
  AddUser: "/register",
  Login: "/login",
  Logout: "/logout",
  user: "/users/:user",
  update: "/update/:user",
  follow: "/follow",
  password: "/password",
  admin: "/admin",
  username:"/fetch"
};

const params = {
  user: "user",
};

module.exports = { Routes, params };
