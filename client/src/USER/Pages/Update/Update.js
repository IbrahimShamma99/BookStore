import React from "react";
import "./Update.css";
import Button from "react-bootstrap/Button";
import { uploadAvatar } from "../../Utils/api-auth";
import url from "../../../constants/server";

const options = ["one", "two", "three"];

class Update extends React.Component {
  state = {
    user: { ...this.props.user },
    avatar: this.props.user.avatar,
  };

  componentDidMount() {
    this.props.InitState();
    this.props.fetchUser(this.props.match.params.user);
  }
  onChangeHandler = (name) => (event) => {
    event.preventDefault();
    if (name === "avatar") {
      this.setState({
        avatar: event.target.files[0],
      });
      setTimeout(() => {
        uploadAvatar(
          this.state.user._id,
          this.state.avatar,
          () => {
            this.props.fetchUser(this.props.match.params.user);
          },
          5
        );
      });
    }
    return this.setState({
      user: {
        ...this.state.user,
        [name]: event.target.value,
      },
    });
  };
  clickSubmit = (e) => {
    e.preventDefault();
    uploadAvatar(this.state.user._id, this.state.avatar, () => {
      this.props.fetchUser(this.props.match.params.user);
    });
    return this.props.submit(this.state);
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

          <label htmlFor="avatar">avatar</label>

          <input
            type="file"
            className=""
            name="avatar"
            onChange={this.onChangeHandler("avatar")}
          />
          {this.props.profile.avatar ? (
            this.props.profile.avatar.filename ? (
              <div class="view overlay zoom">
                <img
                  className="profile-picture"
                  alt="profile"
                  src={url.concat("/", this.props.profile.avatar.filename)}
                ></img>
              </div>
            ) : (
              <img
                className="profile-picture"
                alt="profile"
                src={require("../../Assets/profile.jpg")}
              ></img>
            )
          ) : null}
          <br />

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
          {console.log("state=", this.state)}
          <input
            value={this.state.user.password}
            onChange={this.onChangeHandler("password")}
            type="password"
            id="Password"
            name="Password"
          ></input>
          <br />

          <label htmlFor="location">Location:</label>
          <br />
          <input
            options={options}
            onChange={this.onChangeHandler("location")}
            type="text"
            id="location"
            name="location"
          />
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

          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Update;
