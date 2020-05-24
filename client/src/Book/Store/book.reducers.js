import * as BookActions from "./book.actions";
import initialState from "./book.constants";
import * as api from "../Utils/api";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
      api.create(state.book, action.user).then((data) => {
        if (data.error) {
          action.asyncDispatch({
            type: BookActions.ERROR,
            message: data.error,
          });
        } else {
          action.asyncDispatch({ type: BookActions.CREATE_SUCCESS, data });
        }
      });
      return { ...state };
    case BookActions.CREATE_SUCCESS:
      // upload cover BookActions.SUCCESS
      return {
        ...state,
        book: action.data.book,
      };
    case BookActions.SUCCESS:
      if (action.data) {
        return {
          ...state,
          ...action.data,
        };
      }
      return {
        ...state,
      };
    case BookActions.FETCH_BOOK:
      api.fetchBook(action.ID).then((data) => {
        action.asyncDispatch({ type: BookActions.SUCCESS, data: data });
      });
      return {
        ...state,
      };

    case BookActions.UPDATE_BOOK:
      const bookInfo = {book:state.book};
      if (state.book.cover){
      api.uploadCover(bookInfo.book._id,bookInfo.book.cover)
      }
      api.update(bookInfo,action.user).then((data) => {
        action.asyncDispatch({ type: BookActions.SUCCESS, data: data });
      });
      return {
        ...state,
      };
    case BookActions.MODIFY:
      return {
        ...state,
        book: {
          ...state.book,
          [action.name]: action.value,
        },
      };
    case BookActions.FETCH_FEED:
      api.feed().then((data) => {
        action.asyncDispatch({ type: BookActions.SUCCESS, data });
        return {
          ...state,
        };
      });
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
