import React from "react";
import "./home.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";
import styled from "styled-components";

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
  & > img {
    position: absolute;
    top: 70px;
    left: 0px;
    width: 100%;
    height: 500px;
  }
  & > h1 {
    position: absolute;
    left: 40%;
    top:50px;

  }
  & > span {
    color: white;
    font: bold 24px/45px Helvetica, Sans-Serif;
    letter-spacing: -1px;
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <HomePage>
        <img src={require("../../../logos/home.jpg")}></img>
        <h1>
          <span>BookStore</span>
        </h1>
      </HomePage>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
