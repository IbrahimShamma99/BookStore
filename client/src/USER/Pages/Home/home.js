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
    height: 100%;
  }
`;
const TextArea = styled.div`
  & > h1 {
    position: absolute;
    left: 35%;
    top: 50px;
  }
  & button {
  }
`;

const Span = styled.span`
  color: white;
  font: bold 24px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
`;

const Button = styled.button`
  position: absolute;
  left: 38%;
  top: 57%;
  background-color: rgb(180, 55, 55);
  color: black;
  width: 130px;
  font-weight:bold;
  height: 42px;
  border-radius: 6px;
  font-weight: bold;
  outline: invert;
  margin-left: 75px;
  margin-right: auto;
  &: hover {
    background-color: azure;
    font-weight:bolder;
    border-color:rgb(180, 55, 55);
  }
`;

class Home extends React.Component {
  render() {
    return (
      <HomePage>
        <img src={require("../../../logos/home.jpg")}></img>
        <TextArea>
          <h1>
            <Span>Welcome to BookStore</Span>
          </h1>
          <a href="/register"
          ><Button>Join Now</Button></a>
        </TextArea>
      </HomePage>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
