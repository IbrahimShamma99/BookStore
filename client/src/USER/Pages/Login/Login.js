import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Redirect } from "react-router-dom";
import RouteNames from "../../constants/user.routes";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoginForm = styled.div`
  border: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px -150px -150px -150px;
  width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 5%;
  background-color: bisque;
`;

const Label = styled.label`
  color: black;
  font-weight: bold;
`;
const mapStateToProps = (state) => {
  return {
    email: state.UserState.user.email,
    password: state.UserState.user.password,
    error: state.UserState.error,
    open: state.UserState.open,
    show: state.UserState.show,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: (cb) => dispatch({ type: actionTypes.LOGIN }),
    InitState: () => dispatch({ type: actionTypes.REFRESH }),
    ExternalError: (value) =>
      dispatch({ type: actionTypes.ExternalError, message: value }),
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

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
      return this.props.submit(() => {
        // this.refreshPage();
      });
    } else {
      this.setState({ submitted: true });
    }
  };

  render() {
    const from = this.props.location.state || RouteNames.base;
    if (this.props.open) {
      return <Redirect to={from} />;
    }
    return (
      <>
        <LoginForm>
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
                (this.state.submitted && !this.props.email ? " has-error" : "")
              }
            >
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="password">Password</Label>
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
            <Button
              size="md"
              /*style={}*/ variant="flat"
              onClick={this.SubmitHandler}
            >
              Submit
            </Button>{" "}
          </Form>
        </LoginForm>
      </>
    );
  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
