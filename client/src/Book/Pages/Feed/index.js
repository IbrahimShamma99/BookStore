import Feed from "./Feed";
import { connect } from "react-redux";
import * as BookActions from "../../Store/book.actions";

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    user: state.UserState.user,
    feed: state.BookState.feed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (genre) => dispatch({ type: BookActions.FETCH_FEED, genre }),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Feed);
