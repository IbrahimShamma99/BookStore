import * as BookActions from "./book.actions";
import initialState from './book.constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
    case BookActions.FETCH_BOOK:
    default:
        return {...state}
  }
};

export default reducer;
