import url from "../../constants/server";
import axios from "axios";

const Routes = {
  create: "/books/",
  fetch: "/books/:book/",
  update: "/books/:book/update/",
  feed: "/books/feed/",
  base: "/",
};

const create = (DATA, ID) => {
  const bookInfo = { book: DATA };
  return fetch(url + Routes.create + "?user=" + ID, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
    withCredentials: true,
    crossdomain: true,
    body: JSON.stringify(bookInfo),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const fetchBook = (ID) => {
  return fetch(url + "/books/" + ID, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const feed = (genre) => {
  var urlFeed = undefined;
  if (genre) {
    urlFeed = url.concat(Routes.feed, genre);
  } else {
    urlFeed = url.concat(Routes.feed);
  }
  return fetch(urlFeed, {
    method: "GET",
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
    url.concat(
      "/books/",
      DATA.book._id + "/update",
      "?user=",
      userID
    ),
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("jwt")),
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

const uploadCover = (ID, cover, userID) => {
  const formData = new FormData();
  formData.append("cover", cover);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
  };
  axios.put(
    url.concat("/books/", ID, "/update", "?user=", userID),
    formData,
    config
  );
};

const fetchViaTitle = (title) => {
  const QueryRoute = url.concat("/#/", "?title=", title);
  return fetch(QueryRoute, {
    method: "post",
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

const comment = (ID,userID,commentText) => {
  const commentBody = {
    comment:commentText
  }
  const QueryRoute = url.concat("/books/", ID, "/comment","?user=",userID);
  return fetch(QueryRoute, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
    },
    withCredentials: true,
    crossdomain: true,
    body:JSON.stringify(commentBody)
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const react = (ID,userID,value) => {
  const QueryRoute = url.concat("/books/", ID, "/react","?user=",userID,"&react=",value);
  return fetch(QueryRoute, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("jwt")),
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
  feed,
  fetchViaTitle,
  fetchBook,
  create,
  update,
  uploadCover,
  react,
  comment,
};
