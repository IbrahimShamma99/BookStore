import React from "react";
//import "./home.scss";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/user.actions";
import styled from "styled-components";
import auth from "../../../USER/Utils/auth-helper";
import { Breakpoint } from "react-socks";

const mapStatetoProps = (state) => {
  return {
    open: state.UserState.open,
    error: state.UserState.error,
    theme: state.util.theme,
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
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;
const TextArea = styled.div`
  & > h1 {
    position: relative;

    color: ${(props) => (props.primary ? "azure" : "black")};
  }
  & button {
  }
`;

const TextAreaAuth = styled(TextArea)`
  & > h1 {
    left: 42%;
  }
`;
const TipTextArea = styled(TextArea)`
  & > h1 {
    position: absolute;
    left: 1%;
    top: 50%;
  }
`;

const Span = styled.span`
  color: white;
  font: bold 24px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  & > a {
    color: rgb(180, 55, 55);
  }
`;
const BaseButton = styled.button`
  position: relative;
  background-color: rgb(180, 55, 55);
  color: black;
  width: 150px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  height: 42px;
  border-radius: 8px;
  font-weight: 900;
  outline: invert;
  border-color: beige;
  margin-left: 75px;
  margin-right: auto;
  &: hover {
    background-color: beige;
    color: rgb(180, 55, 55);
    border-color: rgb(180, 55, 55);
  }
`;
const Button = styled(BaseButton)`
  top: 60%;
  width: 180px;
  height: 45px;
  border-radius: 12px;
`;

const CreateButton = styled(BaseButton)`
  top: 60%;
`;

const ExploreButton = styled(BaseButton)`
  top: 60%;
  background: azure;
  color: rgb(180, 55, 55);
  border-color: rgb(180, 55, 55);
  &: hover {
    color: azure;
    background-color: rgb(180, 55, 55);
    border-color: azure;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Breakpoint medium up>
          {auth.isAuthenticated() ? (
            <HomePage>
              <img
                alt="Home-background"
                src={require("../../../logos/library.jpg")}
              ></img>

              <TipTextArea primary={this.props.theme === "light" ? true : null}>
                <h1>
                  <Span>
                    Here you can expolre
                    <a href="/book/feed">
                      {" "}
                      <br /> your favorite books
                    </a>
                    <a href="/book/create">
                      <br /> and add yours
                    </a>
                  </Span>
                </h1>
              </TipTextArea>

              <TextAreaAuth primary={this.props.theme === "light" ? true : null}>
                <h1>
                  <Span>Explore Now!</Span>
                </h1>
                <a href="/book/create">
                  <CreateButton
                    primary={this.props.theme === "light" ? true : null}
                  >
                    Add books!
                  </CreateButton>
                </a>
                <a href="/book/feed">
                  <ExploreButton>Explore!</ExploreButton>
                </a>
              </TextAreaAuth>
            </HomePage>
          ) : (
            <HomePage>
              <img
                alt="Home-background"
                src={require("../../../logos/home.jpg")}
              ></img>
              <TextArea>
                <h1>
                  <Span>
                    Welcome to BookStore here you &nbsp;
                    <br />
                    &nbsp;can explore and add your books&nbsp;
                  </Span>
                </h1>
                <a href="/register">
                  <Button primary={this.props.theme === "light" ? true : null}>
                    Join Now
                  </Button>
                </a>
              </TextArea>
            </HomePage>
          )}
        </Breakpoint>
        <Breakpoint small down></Breakpoint>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home);
