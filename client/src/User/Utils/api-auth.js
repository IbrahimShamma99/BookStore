import url from "../../constants/server";
import axios from "axios";
import apiRoutes from "../constants/user.api.routes";
const login = (DATA) => {
  return fetch(url.concat(apiRoutes.login), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(DATA),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  return fetch(url.concat(apiRoutes.logout), {
    method: "GET",
    body: JSON.stringify({}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const register = (user) => {
  return fetch(url.concat(apiRoutes.register), {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const signout = () => {
  return fetch(url.concat(apiRoutes.logout), {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const update = (DATA) => {
  return fetch(url , apiRoutes.update , DATA.user._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(DATA),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const uploadAvatar = (ID, avatar, cb) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
  };
  axios.put(url.concat(apiRoutes.update , ID), formData, config);
  cb();
};

const fetchViaUsername = (username) => {
  const QueryRoute = url.concat(apiRoutes.username, username);
  return fetch(QueryRoute, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const forget_password = (email) => {
  const QueryRoute = url.concat(apiRoutes.password, email);
  return fetch(QueryRoute, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    crossdomain: true,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export {
  signout,
  login,
  logout,
  forget_password,
  uploadAvatar,
  register,
  update,
  fetchViaUsername,
};
