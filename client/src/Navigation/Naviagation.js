import React from "react";
import RouteNames from "../User/constants/user.routes";
import bookRoutes from "../Book/constants/books.routes";
import auth from "../User/Utils/auth-helper";
import url from "../constants/server";
//SECTION importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import StyleComponent from "./Styles";
import styled from "styled-components";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Naviagtion = styled(Navbar)`
  height: 3rem;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => (props.primary ? "white" : "azure")};
  border-radius: 1px;
  border-style: solid;
`;

class naviagtionBar extends React.Component {
  componentWillMount() {
    this.props.refresh();
  }

  Styles = StyleComponent(this.props.theme);

  render() {
    return (
      <Naviagtion
        primary={this.props.theme === "light" ? true : null}
        fixed="top"
      >
        <Navbar.Brand href={RouteNames.base}>
          <this.Styles.StyledNavButton>
            <this.Styles.HOME>
              <HomeRoundedIcon />
            </this.Styles.HOME>
          </this.Styles.StyledNavButton>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {!auth.isAuthenticated() ? (
              <Nav.Link href={RouteNames.register}>
                <this.Styles.StyledNavButton variant="inherit">
                  <this.Styles.H5>Register</this.Styles.H5>
                </this.Styles.StyledNavButton>
              </Nav.Link>
            ) : null}
            {!auth.isAuthenticated() ? (
              <Nav.Link href={RouteNames.login}>
                <this.Styles.StyledNavButton variant="inherit">
                  <this.Styles.H5>Login</this.Styles.H5>
                </this.Styles.StyledNavButton>
              </Nav.Link>
            ) : null}
            {auth.isAuthenticated() ? (
              <Nav.Link href={RouteNames.logout}>
                <this.Styles.StyledNavButton
                  variant="inherit"
                  onClick={() => {
                    auth.signout();
                  }}
                >
                  <this.Styles.H5>Logout</this.Styles.H5>
                </this.Styles.StyledNavButton>
              </Nav.Link>
            ) : null}

            {auth.isAuthenticated() ? (
              <Nav.Link href={bookRoutes.feed}>
                <this.Styles.StyledNavButton variant="inherit">
                  <this.Styles.H5>Explore</this.Styles.H5>
                </this.Styles.StyledNavButton>
              </Nav.Link>
            ) : null}
            {auth.isAuthenticated() ? (
              <Nav.Link href={bookRoutes.create}>
                <this.Styles.StyledNavButton variant="inherit">
                  <this.Styles.H5>Add book</this.Styles.H5>
                </this.Styles.StyledNavButton>
              </Nav.Link>
            ) : null}
            {/*        
          <NavDropdown title="Find your genre" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1/">Sports</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cars</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Anime</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Collections</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Users</NavDropdown.Item>
        </NavDropdown>
        */}
            {` `}
          </Nav>
          {auth.isAuthenticated() ? <div>{this.props.switchTheme}</div> : null}

          {auth.isAuthenticated() ? (
            <Nav.Link href={"/".concat(this.props.user.username)}>
              <this.Styles.StyledNavButton variant="inherit">
                <this.Styles.H5>
                  {this.props.user.avatar ? (
                    <img
                      alt="profile"
                      src={url.concat("/", this.props.user.avatar.filename)}
                    ></img>
                  ) : (
                    <img alt="profile"></img>
                  )}
                </this.Styles.H5>
              </this.Styles.StyledNavButton>
            </Nav.Link>
          ) : null}

          {auth.isAuthenticated() ? (
            <this.Styles.StyledNavButton>
              <NotificationsIcon />
            </this.Styles.StyledNavButton>
          ) : null}
        </Navbar.Collapse>
      </Naviagtion>
    );
  }
}
export default naviagtionBar;
