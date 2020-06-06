import Book from "./Book";
import { connect } from "react-redux";
import * as BookActions from "../../Store/book.actions";

const mapStatetoProps = (state) => {
  return {
    theme: state.util.theme,
    book: state.BookState.book,
    user: state.UserState.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBook: (ID) => {
      dispatch({ type: BookActions.FETCH_BOOK, ID });
    },
    comment: (comment, ID, userID) => {
      dispatch({ type: BookActions.COMMENT, ID, comment, userID });
    },
    react: (ID, userID, value) =>
      dispatch({ type: BookActions.REACT, value, ID, userID }),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Book);
