import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Routes from "../../constants/user.routes";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

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

const Forget = (props) => {
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
        {props.show ? (
          <div className="alert">
            <span
              className="closebtn"
              onClick="this.parentElement.style.display='none';"
            >
              &times;
            </span>
            {props.error}
          </div>
        ) : null}
        <Typography component="h1" variant="h5">
          Forget your password
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
          <Button
            fullWidth
            variant="contained"
            onClick={SubmitHandler}
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
          <Grid container>
            <Grid item>
              <Link href={Routes.register} variant="body2">
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

Forget.propTypes = {
  email: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    email: state.UserState.user.email,
    error: state.UserState.error,
    open: state.UserState.open,
    show: state.UserState.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (cb) => dispatch({ type: actionTypes.PASSWORD_FORGET }),
    InitState: () => dispatch({ type: actionTypes.REFRESH }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.ExternalError, message: value }),
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forget);
