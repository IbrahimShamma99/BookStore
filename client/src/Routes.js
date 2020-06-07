import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CustomRouter from './User/Utils/PrivateRoute';

import BookRouteNames from "./Book/constants/books.routes";
import UserRouteNames from "./User/constants/user.routes";

//SECTION Pages User
import Login from "./User/Pages/Login/";
import Signup from "./User/Pages/Register/";
import Home from "./User/Pages/Home/";
import Profile from "./User/Pages/Profile/";
import Update from "./User/Pages/Update";

//SECTION Pages Book
import Feed from "./Book/Pages/Feed/";
import Book from "./Book/Pages/Book/";
import CreateBook from "./Book/Pages/Create/";
import UpdateBook from './Book/Pages/Update/'
import BookBrief from './Book/Pages/Brief/'
import BuyBook from './Book/Pages/Buy/'

class Switcher extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={UserRouteNames.base} component={Home} />
            <CustomRouter.PublicRoute path={UserRouteNames.login} component={Login} />
            <CustomRouter.PublicRoute path={UserRouteNames.register} component={Signup} />
            <Route exact path={BookRouteNames.feed} component={Feed}/>
            <Route path={BookRouteNames.genre} component={Feed} />
            <CustomRouter.PrivateRoute path={BookRouteNames.create} component={CreateBook} />
            <CustomRouter.PrivateRoute path={BookRouteNames.update} component={UpdateBook} />
            <Route path={BookRouteNames.brief} component={BookBrief} />
            <Route path={BookRouteNames.buy} component={BuyBook} />
            <Route path={BookRouteNames.book} component={Book} />
            <CustomRouter.PrivateRoute path={UserRouteNames.logout}>
              <Redirect to={UserRouteNames.base} />
            </CustomRouter.PrivateRoute>
            <CustomRouter.PrivateRoute path={UserRouteNames.update} component={Update} />
            <Route path={UserRouteNames.profile} component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Switcher;
