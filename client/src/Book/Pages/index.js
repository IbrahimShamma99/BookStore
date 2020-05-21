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

class UserComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={RouteNames.base} component={Home} />
            <Route path={RouteNames.login} component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default UserComponent;
