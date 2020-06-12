import React from "react";
import PropTypes from "prop-types";
import StyleComponent from "./Styles";
import server from "../../../constants/server";
import auth from "../../../User/Utils/auth-helper";
import heart from "../../../logos/heart.png";
import read_later from "../../../logos/read_later.png";
import unicorn from "../../../logos/unicorn.png";
//import media from "../../../logos/photo-video-solid.svg";
import submit from "../../../logos/paper-plane-regular.svg";
import url from "../../../constants/server";
import defaultCover from "../../Assets/book.jpg";

class Book extends React.Component {
  componentWillMount() {
    this.props.fetchBook(this.props.match.params.book);
  }
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        text: "",
      },
    };
    this.onChangehandler = this.onChangehandler.bind(this);
    this.onSubmitComment = this.onSubmitComment.bind(this);
    this.onReact = this.onReact.bind(this);
  }
  onChangehandler = (event) => {
    this.setState({
      comment: {
        text: event.target.value,
      },
    });
  };
  onSubmitComment = () => {
    this.props.comment(
      this.state.comment,
      this.props.match.params.book,
      this.props.user._id
    );
  };
  onReact = (event) => {
    this.props.react(
      this.props.book._id,
      this.props.user._id,
      event.target.value
    );
  };
  render() {
    const param = this.props.match.params.book;
    const { book, theme, user } = this.props;
    return (
      <div>
        {book._id ? (
          <div>
            <StyleComponent.Page primary={theme === "light" ? true : null}>
              <StyleComponent.BookDiv primary={theme === "light" ? true : null}>
                <StyleComponent.bookInfo
                  primary={theme === "light" ? true : null}
                >
                  <h4>Title:</h4>
                  <p>{book.title}</p>
                  {/*             <h4>Brief:</h4>
              <p>{this.props.book.brief}</p>
*/}
                  <h4>Author:</h4>
                  <p>{book.author}</p>
                </StyleComponent.bookInfo>
                {book.cover.filename ? (
                  <StyleComponent.coverImage
                    alt="cover"
                    src={server.concat("/", book.cover.filename)}
                  ></StyleComponent.coverImage>
                ) : (
                  <StyleComponent.coverImage
                    alt="cover"
                    src={defaultCover}
                  ></StyleComponent.coverImage>
                )}
                {book.comments.length !== 0 ? (
                  <StyleComponent.commentDiv
                    primary={theme === "light" ? true : null}
                  >
                    {book.comments.map((Comment) => {
                      return (
                        <StyleComponent.comment
                          primary={theme === "light" ? true : null}
                        >
                          <p>{Comment.text}</p>
                        </StyleComponent.comment>
                      );
                    })}
                  </StyleComponent.commentDiv>
                ) : null}
                {book.brief ? (
                  <StyleComponent.briefInfo
                    primary={theme === "light" ? true : null}
                  >
                    <h4>Brief:</h4> <br />
                    <p>
                      {book.brief}
                      <a href={"/book/".concat(param, "/", "brief")}>
                        Read More
                      </a>
                    </p>
                  </StyleComponent.briefInfo>
                ) : null}
                {auth.isAuthenticated() && book.owner === user._id ? (
                  <a href={"/book/".concat(param, "/", "update")}>
                    <StyleComponent.ButtonWrapper>
                      EDIT Book
                    </StyleComponent.ButtonWrapper>
                  </a>
                ) : null}
                <div className="reacts">
                  <StyleComponent.react
                    primary={theme === "light" ? true : null}
                  >
                    <button value="heart" onClick={this.onReact}>
                      <img alt="heart" src={heart}></img>
                      <p>{book.reacts.heart.length}</p>
                    </button>

                    <button value="read_later" onClick={this.onReact}>
                      <img alt="read_later" src={read_later}></img>
                      <p>{book.reacts.read_later.length}</p>
                    </button>
                    <button value="unicorn" onClick={this.onReact}>
                      <img alt="unicorn" src={unicorn}></img>
                      <p>{book.reacts.unicorn.length}</p>
                    </button>
                  </StyleComponent.react>
                  <StyleComponent.react
                    primary={theme === "light" ? true : null}
                  >
                    <p></p>
                    <p></p>
                  </StyleComponent.react>
                </div>
              </StyleComponent.BookDiv>
              <StyleComponent.Comment primary={theme === "light" ? true : null}>
                {user.avatar ? (
                  <img
                    alt="profile"
                    src={url.concat("/", user.avatar.filename)}
                  ></img>
                ) : (
                  <img
                    className="mobile-profile-picture"
                    alt="profile"
                    src={require("../../Assets/profile.jpg")}
                  ></img>
                )}
                <StyleComponent.CommentForm
                  onChange={this.onChangehandler}
                  primary={theme === "light" ? true : null}
                ></StyleComponent.CommentForm>
                <StyleComponent.submit onClick={this.onSubmitComment}>
                  <img alt="submit" src={submit}></img>
                </StyleComponent.submit>
              </StyleComponent.Comment>
            </StyleComponent.Page>
          </div>
        ) : null}
      </div>
    );
  }
}
Book.propTypes = {
  book: PropTypes.object,
  theme: PropTypes.string,
};
export default Book;
