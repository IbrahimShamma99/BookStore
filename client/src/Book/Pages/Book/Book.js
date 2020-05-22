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
      <StyleComponent.BookDiv primary={this.props.theme === "light" ? true : null}>
{/*        <h2>{BookInfo.title}</h2>
        <p>{BookInfo.brief}</p>
            <p>{BookInfo.author}</p>
*/}        <StyleComponent.coverImage
          alt="cover"
          src={require("../../assets/" + BookInfo.cover.filename)}
        ></StyleComponent.coverImage>
      </StyleComponent.BookDiv>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Book);
