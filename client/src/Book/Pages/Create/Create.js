import React from "react";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";
import Button from "react-bootstrap/Button";

const mapStateToProps = (state) => {
  const BookState = {
    ...state.BookState.book,
    show: state.show,
    error: state.error,
    open: state.open,
    message: state.message,
  };
  return BookState;
};

/**
  title: "",
  brief: "",
  author: "",
  cover: {
    filename: "",
  }
 */
const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (Data) => dispatch({ type: bookTypes.CREATE_BOOK, Data }),
  };
};

class Book extends React.Component {
  onChangeHandler = (name) => (event) => {
    this.props.change(name, event.target.value);
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
          <input
            value={this.props.title}
            onChange={this.onChangeHandler("brief")}
            type="text"
            id="Brief"
            name="Brief"
          ></input>
          <br />

          <label htmlFor="Author">Author:</label>
          <br />
          <input
            value={this.props.title}
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

export default connect(mapStateToProps, mapDispatchToProps)(Book);
