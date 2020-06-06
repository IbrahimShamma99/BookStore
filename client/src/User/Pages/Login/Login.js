import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import "./Login.css";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/user.routes";
import PropTypes from "prop-types";
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

const SignIn = (props) => {
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
const LoginForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px -150px -150px -150px;
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 6px;
  background-color: bisque;
`;

const Label = styled.label`
  color: black;
  font-weight: bold;
`;

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      ok: true,
    };
  }
  componentDidMount() {
    this.props.refresh();
  }

  Changehandler = (name) => (event) => {
    this.props.change(name, event.target.value);
  };

  SubmitHandler = () => {
    if (this.props.email && this.props.password) {
      this.setState({ submitted: true });
      return this.props.submit(() => {});
    } else {
      this.setState({ submitted: true });
    }
  };

  render() {
    const classes = useStyles();

    const from = this.props.location.state || RouteNames.base;
    if (this.props.open) {
      return <Redirect to={from} />;
    }
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
              id="email"
              label="Email Address"
              name="email"
              value="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value="password"
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
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};
export default SignIn;
