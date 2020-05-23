import React from "react";
import styled from "styled-components";

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
    filename: "Ego.jpg",
  },
};

const FeedPage = styled.div`
  padding: 2em;
  position: absolute;
  top:80px;
  left:40px;
  margin-top:5px;
  margin-bottom:20px;
  background: #333333;
  width: auto;
  height: auto;
  max-width: 1100px;
  & > h1 {
    left: 0;
    top: 0;
    width: 300px;
    border: 3px solid #73ad21;
  }
`;

const Book = styled.div`
  padding: 1em;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  & > p {
    color: #333333;
  }
  & > img {
    width: 100px;
  }
`;

class Feed extends React.Component {
  render() {
    return (
      <FeedPage>
        <h2>LATEST NEWS</h2>
        <Book>
          <img
            alt="cover"
            src={require("../../assets/" + BookInfo.cover.filename)}
          ></img>
          <p>{BookInfo.title}</p>
          <p>{BookInfo.author}</p>
        </Book>
        <Book>
        <img
          alt="cover"
          src={require("../../assets/" + BookInfo.cover.filename)}
        ></img>
        <p>{BookInfo.title}</p>
        <p>{BookInfo.author}</p>
      </Book>
      <Book>
      <img
        alt="cover"
        src={require("../../assets/" + BookInfo.cover.filename)}
      ></img>
      <p>{BookInfo.title}</p>
      <p>{BookInfo.author}</p>
    </Book>
    <Book>
    <img
      alt="cover"
      src={require("../../assets/" + BookInfo.cover.filename)}
    ></img>
    <p>{BookInfo.title}</p>
    <p>{BookInfo.author}</p>
  </Book>
  <Book>
  <img
    alt="cover"
    src={require("../../assets/" + BookInfo.cover.filename)}
  ></img>
  <p>{BookInfo.title}</p>
  <p>{BookInfo.author}</p>
</Book>
<Book>
<img
  alt="cover"
  src={require("../../assets/" + BookInfo.cover.filename)}
></img>
<p>{BookInfo.title}</p>
<p>{BookInfo.author}</p>
</Book>
<Book>
<img
  alt="cover"
  src={require("../../assets/" + BookInfo.cover.filename)}
></img>
<p>{BookInfo.title}</p>
<p>{BookInfo.author}</p>
</Book>

      </FeedPage>
    );
  }
}
export default Feed;
