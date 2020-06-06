import Navbar from "./Naviagation";
import * as actionTypes from "../User/Store/user.actions";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
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
