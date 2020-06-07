import React from "react";
import "./Update.css";
//import Button from "react-bootstrap/Button";
import { uploadAvatar } from "../../Utils/api-auth";
import url from "../../../constants/server";
import styled from "styled-components";
//UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        BookApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Update = (props) => {
  const SubmitHandler = () => {
    uploadAvatar(props.user._id, props.user.avatar, () => {
      props.fetchUser(props.match.params.user);
    });
    return props.submit(props.user);
  };
  const Changehandler = (name) => (event) => {
    if (name==="avatar"){
      return uploadAvatar(props.user._id, event.target.files[0], () => {
      });
    }
    return props.change(name, event.target.value);
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {props.profile.avatar ? (
          props.profile.avatar.filename ? (
            <div className="view overlay zoom">
              <img
                className="profile-picture"
                alt="profile"
                src={url.concat("/", props.profile.avatar.filename)}
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
        <label htmlFor="avatar">avatar</label>
        <input
          type="file"
          className=""
          name="avatar"
          onChange={Changehandler("avatar")}
        />

        <Typography component="h1" variant="h5">
          Update
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={props.user.first_name}
            id="first_name"
            label="First Name"
            name="first_name"
            onChange={Changehandler("first_name")}
            autoComplete="first_name"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={props.user.last_name}
            id="last_name"
            label="Last Name"
            name="last_name"
            onChange={Changehandler("last_name")}
            autoComplete="last_name"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            value={props.user.email}
            label="Email Address"
            name="email"
            onChange={Changehandler("email")}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={Changehandler("password")}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <TextareaAutosize
            variant="outlined"
            margin="normal"
            required
            id="bio"
            value={props.user.bio}
            label="Bio"
            name="bio"
            onChange={Changehandler("bio")}
            autoComplete="bio"
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const options = ["one", "two", "three"];

class update extends React.Component {
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
              <div className="view overlay zoom">
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
