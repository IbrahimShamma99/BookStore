import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BookRouteNames from "./Book/constants/books.routes";
import UserRouteNames from "./USER/constants/user.routes";

//SECTION Pages User
import Login from "./USER/Pages/Login/";
import Signup from "./USER/Pages/Register/";
import Home from "./USER/Pages/Home/";
import Profile from "./USER/Pages/Profile/";
import Update from "./USER/Pages/Update";

//SECTION Pages Book
import Feed from "./Book/Pages/Feed/";
import Book from "./Book/Pages/Book/";
import CreateBook from "./Book/Pages/Create/";

class Switcher extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={UserRouteNames.base} component={Home} />
            <Route path={UserRouteNames.login} component={Login} />
            <Route path={UserRouteNames.register} component={Signup} />
            <Route exact path={BookRouteNames.feed} component={Feed} />
            <Route path={BookRouteNames.book} component={Book} />
            
            <Route path={UserRouteNames.logout}>
              <Redirect to={UserRouteNames.base} />
            </Route>
            <Route path={UserRouteNames.update} component={Update} />
            <Route path={UserRouteNames.profile} component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Switcher;
