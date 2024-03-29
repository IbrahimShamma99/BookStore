import Update from "./Update";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

const mapStateToProps = (state) => {
  const UpdateState = {
    user: state.UserState.user,
    profile: state.UserState.profile,
    open: state.open,
    error: state.error,
    show: state.show,
    submitted: state.submitted,
  };
  return UpdateState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) =>
      dispatch({ type: actionTypes.MODIFY, name, value }),
    fetchUser: (username) => {
      dispatch({ type: actionTypes.USERNAME_FETCH, username });
    },
    submit: () => dispatch({ type: actionTypes.UPDATE }),
    InitState: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
