import Login from "./Login";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
