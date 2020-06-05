import Navbar from "./Naviagation";
import * as actionTypes from "../USER/Store/user.actions";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    username: state.UserState.user.username,
    user: state.UserState.user,
    theme: state.util.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);
