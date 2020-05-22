import React from "react";
import StyleComponent from "./Styles";
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

class Book extends React.Component {
  render() {
    return (
      <StyleComponent.BookDiv
        primary={this.props.theme === "light" ? true : null}
      >
        <StyleComponent.bookInfo
          primary={this.props.theme === "light" ? true : null}
        >
          <h4>Title:</h4>
          <p>{BookInfo.title}</p>
          <h4>Brief:</h4>
          <p>{BookInfo.brief}</p>
          <h4>Author:</h4>
          <p>{BookInfo.author}</p>
        </StyleComponent.bookInfo>
        <StyleComponent.coverImage
          alt="cover"
          src={require("../../assets/" + BookInfo.cover.filename)}
        ></StyleComponent.coverImage>
        <StyleComponent.ButtonWrapper>
          <button>Button 1</button>
        </StyleComponent.ButtonWrapper>
      </StyleComponent.BookDiv>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Book);
