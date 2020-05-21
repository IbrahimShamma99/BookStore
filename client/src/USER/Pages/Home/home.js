import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";

const mapStatetoProps = (state) => {
  //TODO list of whatever the project wants
  return {
    open: state.open,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class Home extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="col">
          <div className="row"></div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
