import Update from "./Update";
import { connect } from "react-redux";
import * as bookTypes from "../../Store/book.actions";

const mapStateToProps = (state) => {
  const BookState = {
    user: state.UserState.user,
    ...state.BookState.book,
    error: state.BookState.error,
    open_error: state.BookState.open_error,
    open_message: state.BookState.open_message,
    message: state.BookState.message,
  };
  return BookState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (name, value) => dispatch({ type: bookTypes.MODIFY, name, value }),
    submit: (userId) => dispatch({ type: bookTypes.UPDATE_BOOK, user: userId }),
    refreshBook: () => dispatch({ type: bookTypes.REFRESH_BOOK }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
