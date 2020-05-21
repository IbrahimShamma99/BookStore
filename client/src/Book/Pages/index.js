import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouteNames from "../constants/books.routes";

//SECTION Pages
import Book from "./Book";
import Feed from "./Feed";

class BookComponent extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={RouteNames.feed} component={Feed} />
            <Route path={RouteNames.book} component={Book} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default BookComponent;
