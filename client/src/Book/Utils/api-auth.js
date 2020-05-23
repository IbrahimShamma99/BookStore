import apiNames from "../../constants/server";
import axios from "axios";

const create = (DATA) => {
  return fetch(apiNames.serverDev + "/#", {
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

const fetch = () => {
  return fetch(apiNames.serverDev + "/#", {
    method: "GET",
    body: JSON.stringify({}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const feed = () => {
  return fetch(apiNames.serverDev + "/#", {
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

const update = (DATA) => {
  return fetch(apiNames.serverDev + "/#/" + DATA.book._id, {
    method: "PUT",
    headers: {
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

const uploadCover = (ID, cover) => {
  const formData = new FormData();
  formData.append("cover", cover);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(sessionStorage.getItem("jwt")),
    },
  };
  axios.put(apiNames.serverDev + "/update/" + ID, formData, config);
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

export { feed, fetchViaTitle, fetch, create, update, uploadCover };
