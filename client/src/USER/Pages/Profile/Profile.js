import React from "react";
//import "./Profile.css";
import { Breakpoint } from "react-socks";
import ContactLogo from "./contacts";
// import RouteNames from "../../constants/routes";
import { connect } from "react-redux";
import auth from "../../Utils/auth-helper";
import * as actionTypes from "../../Store/user.actions";
import ServerDir from "../../../constants/server";
import StyleComponents from "./Components/Styles";

const mapStatetoProps = (state) => {
  console.log("state.user", state.user);
  return {
    ...state.UserState,
    theme: state.util.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch({ type: actionTypes.USERNAME_FETCH, username });
    },
    refresh: () => dispatch({ type: actionTypes.REFRESH }),
  };
};

class Profile extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.match.params.user);
  }
  Styles = StyleComponents(this.props.theme);
  render() {
    return (
      <div className="container">
        {this.props.show ? (
          <this.Styles.alert>
            <div className="alert">
              <span
                className="closebtn"
                onClick="this.parentElement.style.display='none';"
              >
                &times;
              </span>
              {this.props.error}
            </div>
          </this.Styles.alert>
        ) : null}

        <Breakpoint medium up>
          {/** Desktop & Tablet version */}
          <this.Styles.ProfileContainer primary={this.props.theme==="light"? true :null}>
            {this.props.profile.avatar ? (
              this.props.profile.avatar.filename ? (
                <div class="view overlay zoom">
                  <this.Styles.Img
                    className="profile-picture"
                    alt="profile"
                    src={
                      ServerDir.serverDev +
                      "/" +
                      this.props.profile.avatar.filename
                    }
                  ></this.Styles.Img>
                </div>
              ) : (
                <this.Styles.Img
                  className="profile-picture"
                  alt="profile"
                  src={require("../../Assets/profile.jpg")}
                ></this.Styles.Img>
              )
            ) : null}
            <div className="username-container">
              <span>
                <this.Styles.usernameContainerH3>
                  {this.props.profile.first_name} <br />
                  {this.props.profile.last_name}
                </this.Styles.usernameContainerH3>
              </span>
              <this.Styles.usernameContainerP>
                {this.props.profile.bio}
              </this.Styles.usernameContainerP>
              {auth.isAuthenticated() &&
              this.props.user._id === this.props.profile._id ? (
                <div className="username-container-button">
                  <a href={"/" + this.props.username + "/update"}>
                    <this.Styles.usernameContainerButton>
                      Edit Profile
                    </this.Styles.usernameContainerButton>
                  </a>
                </div>
              ) : null}
              <div className="contacts-container">
                <div className="row">
                  {this.props.profile.contacts
                    ? this.props.profile.contacts.map((contact) => {
                        return <ContactLogo contact={contact} />;
                      })
                    : null}
                </div>
              </div>
            </div>
            <this.Styles.InfoContainer>
              <this.Styles.InfoAttributes>Location</this.Styles.InfoAttributes>
              <this.Styles.InfoH4>
                {this.props.profile.location}
              </this.Styles.InfoH4>
              {this.props.profile.interests ? (
                <div>
                  <this.Styles.InfoAttributes>Interests</this.Styles.InfoAttributes>
                  <this.Styles.InfoH4>
                    {this.props.profile.interests.map((intr) => intr)}
                  </this.Styles.InfoH4>
                </div>
              ) : null}
              <this.Styles.InfoAttributes>Email</this.Styles.InfoAttributes>
              <this.Styles.InfoH4>
                {this.props.profile.email}
              </this.Styles.InfoH4>
            </this.Styles.InfoContainer>
          </this.Styles.ProfileContainer>
        </Breakpoint>
        <Breakpoint small down>
          <div className="mobile-profile-container container-fluid">
            {this.props.profile ? (
              <img
                className="mobile-profile-picture"
                alt="profile"
                src={
                  ServerDir.serverDev + "/" + this.props.profile.avatar.filename
                }
              ></img>
            ) : (
              <img
                className="mobile-profile-picture"
                alt="profile"
                src={require("../../Assets/profile.jpg")}
              ></img>
            )}
            <div className="mobile-username-container">
              <span>
                <h3>
                  {this.props.profile.first_name} <br />
                  {this.props.profile.last_name}
                </h3>
              </span>
              <p> {this.props.profile.bio} </p>

              <div className="mobile-contacts-container">
                <div className="row">
                  <div className="col">
                    <a href="/">
                      <img
                        alt="pinterest"
                        src={require("../../Assets/pinterest.svg")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="github"
                        src={require("../../Assets/github.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="dev"
                        src={require("../../Assets/dev-brands.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="twitter"
                        src={require("../../Assets/twitter.svg")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="linkedin"
                        src={require("../../Assets/linkedin.png")}
                      ></img>
                    </a>
                  </div>

                  <div className="col">
                    <a href="/">
                      <img
                        alt="user"
                        src={require("../../Assets/user-circle-solid.svg")}
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-info-container">
              <h5 className="mobile-info-attribute">Location</h5>
              <h4>{this.props.profile.location}</h4>
              <h5 className="mobile-info-attribute">Interests</h5>
              <h4>
                {this.props.profile.interests
                  ? this.props.profile.interests.map((intr) => intr)
                  : null}
              </h4>
              <h5 className="mobile-info-attribute">Email</h5>
              <h4>{this.props.profile.email}</h4>
            </div>
          </div>
        </Breakpoint>
      </div>
    );
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Profile);
