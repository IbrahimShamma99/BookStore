import React from "react";
import StyleComponent from "./Styles";
import { connect } from "react-redux";
import * as BookActions from "../../Store/book.actions";
import server from "../../../constants/server";
import auth from '../../../USER/Utils/auth-helper';

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    book: state.BookState.book,
    user:state.UserState.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (ID) => {
      dispatch({ type: BookActions.FETCH_BOOK, ID });
    },
  };
};

class Book extends React.Component {
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book);
  }
  render() {
    return (
      <StyleComponent.BookDiv
        primary={this.props.theme === "light" ? true : null}
      >
        <StyleComponent.bookInfo
          primary={this.props.theme === "light" ? true : null}
        >
          <h4>Title:</h4>
          <p>{this.props.book.title}</p>
          <h4>Brief:</h4>
          <p>{this.props.book.brief}</p>
          <h4>Author:</h4>
          <p>{this.props.book.author}</p>
        </StyleComponent.bookInfo>
        {this.props.book.cover.filename ? (
          <StyleComponent.coverImage
            alt="cover"
            src={server.serverDev.concat("/",this.props.book.cover.filename)}
          ></StyleComponent.coverImage>
        ) : (
          <StyleComponent.coverImage
            alt="cover"
            src="data:image/jpeg;base64,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"
          ></StyleComponent.coverImage>
        )}
        {/*
        <StyleComponent.ButtonWrapper>Buy</StyleComponent.ButtonWrapper>
        */}
        {auth.isAuthenticated() && this.props.book.owner === this.props.user._id?( 
        <a href={"/book/".concat(this.props.match.params.book ,"/","update")}
        ><StyleComponent.ButtonWrapper>EDIT Book</StyleComponent.ButtonWrapper></a>):null
        }
      </StyleComponent.BookDiv>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Book);
