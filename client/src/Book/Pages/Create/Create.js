import React from "react";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";
const mapStateToProps = (state) => {
  const BookState = {
    ...state.BookState.book
};
  return BookState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (Data) => dispatch({ type: bookTypes.CREATE_BOOK, Data })
  };
};

class Book extends React.Component {

  render() {
      return  (
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

          <label htmlFor="First">First name:</label>
          <br />
          <input
            value={this.state.user.first_name}
            onChange={this.onChangeHandler("first_name")}
            type="text"
            id="First"
            name="First"
          ></input>
          <br />

          <label htmlFor="Last">Last name:</label>
          <br />
          <input
            value={this.state.user.last_name}
            onChange={this.onChangeHandler("last_name")}
            type="text"
            id="Last"
            name="Last"
          ></input>
          <br />

          <label htmlFor="Username">Username:</label>
          <br />
          <input
            value={this.state.user.username}
            onChange={this.onChangeHandler("username")}
            type="text"
            id="Username"
            name="Username"
          ></input>
          <br />

          <label htmlFor="Email">Email</label>
          <br />
          <input
            value={this.state.user.email}
            onChange={this.onChangeHandler("email")}
            type="email"
            id="Email"
            name="Email"
          ></input>
          <br />

          <label htmlFor="Password">Password</label>
          <br />
          <input
            value={this.state.user.password}
            onChange={this.onChangeHandler("password")}
            type="password"
            id="Password"
            name="Password"
          ></input>
          <br />

          <label min="1950-01-01" htmlFor="date">
            Born
          </label>
          <br />
          <input
            onChange={this.onChangeHandler("birth_date")}
            value={this.state.birth_date}
            type="date"
            id="date"
            name="date"
          ></input>
          <br />

          <label className="bio-form" htmlFor="Bio">
            Bio:
          </label>
          <br />
          <textarea
            value={this.state.user.bio}
            onChange={this.onChangeHandler("bio")}
            maxLength="60"
            type="text"
            id="Bio"
            name="Bio"
          ></textarea>
          <br />

          <label htmlFor="Pinterest">Pinterest</label>
          <br />
          <input type="url" id="Pinterest" name="Pinterest"></input>
          <br />

          <label htmlFor="LinkedIn">LinkedIn</label>
          <br />
          <input type="url" id="LinkedIn" name="LinkedIn"></input>
          <br />

          <label htmlFor="Github">Github</label>
          <br />
          <input type="url" id="Github" name="Github"></input>
          <br />
          <label htmlFor="avatar">avatar</label>

          <input
            type="file"
            className=""
            name="avatar"
            onChange={this.onChangeHandler("avatar")}
          />

          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>

      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
