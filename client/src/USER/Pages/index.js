import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RouteNames from "../constants/user.routes";

//SECTION Pages
import Login from "./Login";
import Signup from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import Update from "./Update";

class UserComponent extends React.Component {
  render() {
    return (
      <div>
        {
          //        <NavigationBar switchTheme={this.props.switchTheme} />
        }{" "}
        <Router>
          <Switch>
            <Route exact path={RouteNames.base} component={Home} />
            <Route path={RouteNames.login} component={Login} />
            <Route path={RouteNames.register} component={Signup} />
            <Route path={RouteNames.logout}>
              <Redirect to={RouteNames.base} />
            </Route>
            <Route path={RouteNames.update} component={Update} />
            <Route path={RouteNames.profile} component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default UserComponent;
