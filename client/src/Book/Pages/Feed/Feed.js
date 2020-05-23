import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return { theme: state.util.theme };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

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
  top: 80px;
  border-radius: 5px;
  left: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: ${(props) => (props.primary ? "bisque" : "#505050")};
  width: auto;
  height: auto;
  max-width: 1100px;
  & > h1 {
    left: 0;
    top: 0;
    width: 300px;
    border: 3px solid #73ad21;
    color: ${(props) => (props.primary ? "bisque" : "#505050")};
  }
`;

const Book = styled.div`
  padding: 1em;
  position: relative;
  border-width: 1px 2px 2px 4px; /*top left bottom right */
  border-style: solid;
  border-color: #c93333;
  border-radius: 5px;
  background: ${(props) => (props.primary ? "azure" : "#505050")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  font-size: 16px;
  & > img {
    width: 150px;
    border-radius: 5px;
  }
`;

const BookData = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  & > p {
    margin-top: 5px;
    color: black;
    font-weight: bold;
  }
`;

const INFO = styled.p`
  font-weight: bolder;
`;

class Feed extends React.Component {
  render() {
    return (
      <FeedPage primary={this.props.theme === "light" ? true : null}>
        <h2>Books to be explored!</h2>
        <a href={BookInfo._id}>
          <Book primary={this.props.theme === "light" ? true : null}>
            <img
              alt="cover"
              src={require("../../assets/" + BookInfo.cover.filename)}
            ></img>
            <BookData>
              <INFO>Title:</INFO>
              <p>{BookInfo.title}</p>
              <INFO>Brief:</INFO>
              <p>{BookInfo.brief}</p>
              <INFO>Author:</INFO>
              <p>{BookInfo.author}</p>
            </BookData>
          </Book>
        </a>
      </FeedPage>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Feed);
