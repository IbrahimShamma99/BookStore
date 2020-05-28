import React from "react";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";
import Button from "react-bootstrap/Button";
import auth from "../../../USER/Utils/auth-helper";
const mapStateToProps = (state) => {
  const BookState = {
    user: state.UserState.user,
    ...state.BookState.book,
    show: state.show,
    error: state.error,
    open: state.open,
    message: state.message,
  };
  return BookState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (userId) => dispatch({ type: bookTypes.UPDATE_BOOK, user: userId }),
  };
};

class Update extends React.Component {
  componentWillMount() {
    const authentication =
      auth.isAuthenticated() && this.props.book.owner === this.props.user._id;
    return authentication;
  }
  onChangeHandler = (name) => (event) => {
    if (name === "cover") {
      return this.props.change(name, event.target.files[0]);
    }
    this.props.change(name, event.target.value);
  };
  clickSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.props.user._id);
  };

  render() {
    return (
      <div className="update-container">
        <form>
          {this.props.show ? (
            <div className="alert">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.error}
            </div>
          ) : null}

          <label htmlFor="Title">Title:</label>
          <br />
          <input
            value={this.props.title}
            onChange={this.onChangeHandler("title")}
            type="text"
            id="Title"
            name="Title"
          ></input>
          <br />

          <label htmlFor="Brief">Brief:</label>
          <br />
          <textarea
            value={this.props.brief}
            onChange={this.onChangeHandler("brief")}
            type="text"
            id="Brief"
            name="Brief"
          ></textarea>
          <br />

          <label htmlFor="Author">Author:</label>
          <br />
          <input
            value={this.props.author}
            onChange={this.onChangeHandler("author")}
            type="text"
            id="Author"
            name="Author"
          ></input>
          <br />

          <input
            type="file"
            className=""
            name="cover"
            onChange={this.onChangeHandler("cover")}
          />

          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
