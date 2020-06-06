import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import "./Signup.css";
// import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/user.routes";
import styled from "styled-components";

//UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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

const RegisterForm = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  margin: -170px 0 0 -150px;
  width: 330px;
  height: auto;
  padding: 20px;
  border-radius: 1%;
  background-color: bisque;
`;

class Signup extends React.Component {
  state = {
    submitted: false,
    ok: true,
  };

  componentDidMount() {
    this.props.refresh();
  }

  Changehandler = (name) => (event) => {
    this.props.change(name, event.target.value);
  };

  clickSubmit = async () => {
    this.setState({ submitted: true });
    return this.props.submit();
  };

  render() {
    return (
      <RegisterForm>
        {this.props.open ? <Redirect to={RouteNames.base} /> : null}
        <Form>
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
          <div
            className={
              "form-group" +
              (this.state.submitted && !this.props.first_name
                ? " has-error"
                : "")
            }
          >
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={this.props.first_name}
              onChange={this.Changehandler("first_name")}
              placeholder="First name"
            />
            {this.state.submitted && !this.props.first_name && (
              <div className="help-block">First Name is required</div>
            )}
          </div>
          <div
            className={
              "form-group" +
              (this.state.submitted && !this.props.last_name
                ? " has-error"
                : "")
            }
          >
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={this.props.last_name}
              onChange={this.Changehandler("last_name")}
              placeholder="Last name"
            />
            {this.state.submitted && !this.props.last_name && (
              <div className="help-block">Last Name is required</div>
            )}
          </div>

          <div
            className={
              "form-group" +
              (this.state.submitted && !this.props.username ? " has-error" : "")
            }
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={this.props.username}
              onChange={this.Changehandler("username")}
              placeholder="Username"
            />
            {this.state.submitted && !this.props.last_name && (
              <div className="help-block">Username is required</div>
            )}
          </div>

          <div
            className={
              "form-group" +
              (this.state.submitted && !this.props.email ? " has-error" : "")
            }
          >
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.props.email}
              onChange={this.Changehandler("email")}
              placeholder="Email"
            />
            {this.state.submitted && !this.props.email && (
              <div className="help-block">Email is required</div>
            )}
          </div>

          <div
            className={
              "form-group" +
              (this.state.submitted && !this.props.last_name
                ? " has-error"
                : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.props.password}
              onChange={this.Changehandler("password")}
              placeholder="Password"
            />
            {this.state.submitted && !this.props.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <Button size="md" variant="flat" onClick={this.clickSubmit}>
            Submit
          </Button>
        </Form>
      </RegisterForm>
    );
  }
}

const SignUp = (props) => {
  const SubmitHandler = () => {
    return props.submit(() => {});
  };
  const Changehandler = (name) => (event) => {
    props.change(name, event.target.value);
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
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
            id="username"
            label="Username"
            name="username"
            onChange={Changehandler("username")}
            autoComplete="username"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
