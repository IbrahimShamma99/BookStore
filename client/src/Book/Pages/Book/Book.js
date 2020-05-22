import React from "react";

const BookInfo = {
  _id: "0000",
  title: "EGO",
  brief: "GOOD BOOK",
  author: "RYAN",
  owner: "jenn",
  reviews: [
    { writer: "jaaws", body: "Excellent" },
    { writer: "easyMoneySniper", body: "Great" },
  ],
  cover: {
    filename: "XX",
  },
};

class Book extends React.Component {
  render() {
    return (
      <div>
        <h2>{BookInfo.title}</h2>
        <p>{BookInfo.brief}</p>
        <p>{BookInfo.author}</p>
      </div>
    );
  }
}
export default Book;
