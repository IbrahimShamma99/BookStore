import Signup from "./Register";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

const mapStateToProps = (state) => {
  return {
    email: state.UserState.user.email,
    first_name: state.UserState.user.first_name,
    username: state.UserState.user.username,
    last_name: state.UserState.user.last_name,
    password: state.UserState.user.password,
    open: state.UserState.open,
    error: state.UserState.error,
    show: state.UserState.show,
    submitted: state.UserState.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    submit: () => dispatch({ type: actionTypes.REGISTER }),
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
