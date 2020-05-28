import React from "react";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
  const BookState = {
    userId: state.UserState.user._id,
    ...state.BookState.book,
    error: state.BookState.error,
    open_error: state.BookState.open_error,
    open_message: state.BookState.open_message,
    message: state.BookState.message,
  };
  return BookState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (userId) => dispatch({ type: bookTypes.CREATE_BOOK, user: userId }),
    refreshBook:()=>dispatch({ type: bookTypes.REFRESH_BOOK}),
  };
};

class Book extends React.Component {
  componentDidMount(){}


  onChangeHandler = (name) => (event) => {
    if (name === "cover") {
      return this.props.change(name, event.target.files[0]);
    }
    this.props.change(name, event.target.value);
  };
  clickSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.props.userId);
  };

  render() {
    return (
      <div className="update-container">
        <form>
          {this.props.open_error ? (
            <div className="alert">
              <span
                className="closebtn"
              >
                &times;
              </span>
              {this.props.error}
            </div>
          ) : null}

          {this.props.open_message ? (
            <div className="alert-success">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.message}
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
          <label htmlFor="genre">Choose genre:</label>
          <select
            name="genre"
            id="genre"
            onChange={this.onChangeHandler("genre")}
          >
            <option value="philosphy">Philosphy</option>
            <option value="software_development">Software_development</option>
            <option value="self_improvement">Self_improvement</option>
          </select>

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

export default connect(mapStateToProps, mapDispatchToProps)(Book);
