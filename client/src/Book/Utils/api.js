import apiNames from "../../constants/server";
import axios from "axios";

const Routes = {
  create: "/books/",
  fetch: "/books/:book/",
  update: "/books/:book/update/",
  feed: "/books/feed/",
  base: "/",
};

const create = (DATA,ID) => {
  return fetch(apiNames.serverDev + Routes.create + "?user="+ID, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Token ".concat(sessionStorage.getItem("jwt")),
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

const fetchBook = (ID) => {
  return fetch(apiNames.serverDev + "/books/" + ID, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const feed = () => {
  return fetch(apiNames.serverDev + Routes.feed, {
    method: "POST",
    headers: {
      Accept: "application/json",
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

const update = (DATA, userID) => {
  return fetch(
    apiNames.serverDev.concat("/books/", DATA.book._id, "?user=", userID),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(sessionStorage.getItem("jwt")),
      },
      withCredentials: true,
      crossdomain: true,
      body: JSON.stringify(DATA),
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const uploadCover = (ID, cover) => {
  const formData = new FormData();
  formData.append("cover", cover);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(sessionStorage.getItem("jwt")),
    },
  };
  axios.put(apiNames.serverDev + "/books/" + ID + "/update/", formData, config);
};

const fetchViaTitle = (title) => {
  const QueryRoute = apiNames.serverDev.concat("/#/", "?title=" + title);
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

export { feed, fetchViaTitle, fetchBook, create, update, uploadCover };
