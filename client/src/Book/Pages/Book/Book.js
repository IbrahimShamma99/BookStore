import React from "react";
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
  componentDidMount() {
    this.props.fetchBook(this.props.match.params.book);
  }
  state = {
    comment: {
      text: "",
    },
  };
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
    this.props.react(this.props.book._id, this.props.user._id, event.target.value);
  };
  render() {
    return (
      <div>
      {
        this.props.book._id?
        (
      <div>
        <StyleComponent.Page
          primary={this.props.theme === "light" ? true : null}
        >
          <StyleComponent.BookDiv
            primary={this.props.theme === "light" ? true : null}
          >
            <StyleComponent.bookInfo
              primary={this.props.theme === "light" ? true : null}
            >
              <h4>Title:</h4>
              <p>{this.props.book.title}</p>
              {/*             <h4>Brief:</h4>
              <p>{this.props.book.brief}</p>
*/}
              <h4>Author:</h4>
              <p>{this.props.book.author}</p>
            </StyleComponent.bookInfo>
            {this.props.book.cover.filename ? (
              <StyleComponent.coverImage
                alt="cover"
                src={server.concat("/", this.props.book.cover.filename)}
              ></StyleComponent.coverImage>
            ) : (
              <StyleComponent.coverImage
                alt="cover"
                src={defaultCover}
              ></StyleComponent.coverImage>
            )}
            {this.props.book.comments.length !== 0 ? (
              <StyleComponent.commentDiv
                primary={this.props.theme === "light" ? true : null}
              >
                {this.props.book.comments.map((Comment) => {
                  return (
                    <StyleComponent.comment
                      primary={this.props.theme === "light" ? true : null}
                    >
                      <p>{Comment.text}</p>
                    </StyleComponent.comment>
                  );
                })}
              </StyleComponent.commentDiv>
            ) : null}
            {this.props.book.brief ? (
              <StyleComponent.briefInfo
                primary={this.props.theme === "light" ? true : null}
              >
                <h4>Brief:</h4> <br />
                <p>
                  {this.props.book.brief}
                  <a
                    href={"/book/".concat(
                      this.props.match.params.book,
                      "/",
                      "brief"
                    )}
                  >
                    Read More
                  </a>
                </p>
              </StyleComponent.briefInfo>
            ) : null}
            {auth.isAuthenticated() &&
            this.props.book.owner === this.props.user._id ? (
              <a
                href={"/book/".concat(
                  this.props.match.params.book,
                  "/",
                  "update"
                )}
              >
                <StyleComponent.ButtonWrapper>
                  EDIT Book
                </StyleComponent.ButtonWrapper>
              </a>
            ) : null}
            <div className="reacts">
              <StyleComponent.react
                primary={this.props.theme === "light" ? true : null}
              >
                <button value="heart" onClick={this.onReact}>
                  <img alt="heart" src={heart}></img>
                  <p>{this.props.book.reacts.heart.length}</p>
                </button>

                <button value="read_later" onClick={this.onReact}>
                  <img alt="read_later" src={read_later}></img>
                  <p>{this.props.book.reacts.read_later.length}</p>
                </button>
                <button value="unicorn" onClick={this.onReact}>
                  <img alt="unicorn" src={unicorn}></img>
                  <p>{this.props.book.reacts.unicorn.length}</p>
                </button>
              </StyleComponent.react>
              <StyleComponent.react
                primary={this.props.theme === "light" ? true : null}
              >
                <p></p>
                <p></p>
              </StyleComponent.react>
            </div>
          </StyleComponent.BookDiv>
          <StyleComponent.Comment
            primary={this.props.theme === "light" ? true : null}
          >
            {this.props.user.avatar ? (
              <img
                alt="profile"
                src={url.concat("/", this.props.user.avatar.filename)}
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
              primary={this.props.theme === "light" ? true : null}
            ></StyleComponent.CommentForm>
            <StyleComponent.submit onClick={this.onSubmitComment}>
              <img alt="submit" src={submit}></img>
            </StyleComponent.submit>
          </StyleComponent.Comment>
        </StyleComponent.Page>
      </div>
      ):
      null
    }
      </div>
    );
  }
}
export default Book;
