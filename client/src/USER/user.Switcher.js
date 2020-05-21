import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RouteNames from "./constants/user.routes";

//SECTION Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Update from "./Pages/Update";

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
