import url from "../../constants/server";
import axios from "axios";

const login = (DATA) => {
  return fetch(url + "/login", {
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
  return fetch(url + "/logout", {
    method: "GET",
    body:JSON.stringify({})
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const register = (user) => {
  return fetch(url + "/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
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
  return fetch(url + "/logout", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const update = (DATA) => {
  return fetch(url + "/update/" + DATA.user._id, {
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

const uploadAvatar = (ID, avatar) => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
  };
  axios.put(url + "/update/" + ID, formData, config);
};

const fetchViaUsername = (username) => {
  const QueryRoute = url.concat(
    "/fetch/",
    "?username=" + username
  );
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
  uploadAvatar,
  register,
  update,
  fetchViaUsername,
};
