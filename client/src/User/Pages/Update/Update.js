import React from "react";
import "./Update.css";
import { uploadAvatar } from "../../Utils/api-auth";
import url from "../../../constants/server";
//UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
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
  const SubmitHandler = (e) => {
    e.preventDefault();
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
            type="submit"
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



export default Update;
