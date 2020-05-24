import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";
import styled from 'styled-components';

const mapStatetoProps = (state) => {
  return {
    open: state.UserState.open,
    error: state.UserState.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

const HomePage = styled.div`

`;

class Home extends React.Component {
  render() {
    return (
      <HomePage>
        <img src={require("../../../logos/home.jpg")}></img>
      </HomePage>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
