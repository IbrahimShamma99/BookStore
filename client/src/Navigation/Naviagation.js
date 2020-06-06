import React from "react";
import RouteNames from "../USER/constants/user.routes";
import bookRoutes from "../Book/constants/books.routes";
import auth from "../USER/Utils/auth-helper";
import url from "../constants/server";
//SECTION importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import StyleComponent from "./Styles";


class naviagtionBar extends React.Component {
  componentDidMount() {
    this.props.refresh();
  }

  Styles = StyleComponent(this.props.theme);

  render() {
    return (
      <div className="navbar">
        <Navbar fixed="top" className="input" bg="black" expand="lg">
          <Navbar.Brand href={RouteNames.base}>
            <this.Styles.H4>Home</this.Styles.H4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {!auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.register}>
                  <Button variant="inherit">
                    <this.Styles.H5>Register</this.Styles.H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {!auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.login}>
                  <Button variant="inherit">
                    <this.Styles.H5>Login</this.Styles.H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {auth.isAuthenticated() ? (
                <Nav.Link href={RouteNames.logout}>
                  <Button
                    variant="inherit"
                    onClick={() => {
                      auth.signout();
                    }}
                  >
                    <this.Styles.H5>Logout</this.Styles.H5>
                  </Button>
                </Nav.Link>
              ) : null}

              {auth.isAuthenticated() ? (
                <Nav.Link href={bookRoutes.feed}>
                  <Button variant="inherit">
                    <this.Styles.H5>Explore</this.Styles.H5>
                  </Button>
                </Nav.Link>
              ) : null}
              {auth.isAuthenticated() ? (
                <Nav.Link href={bookRoutes.create}>
                  <Button variant="inherit">
                    <this.Styles.H5>Add book</this.Styles.H5>
                  </Button>
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
            {this.props.switchTheme}
            {console.log(url)}
            {auth.isAuthenticated() ? (
              <Nav.Link href={"/".concat(this.props.user.username)}>
                <Button variant="inherit">
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
                </Button>
              </Nav.Link>
            ) : null}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default naviagtionBar;
