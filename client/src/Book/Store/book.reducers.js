import * as BookActions from "./book.actions";

const bookState = {
  _id: "",
  title: "",
  brief: "",
  author: "",
  owner: "",
  reviews: [{ writer: "", body: "" }],
  cover: {
    filename: "",
  },
};

const initialState = {
  book: { ...bookState },
  feed: [{ ...bookState }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
    case BookActions.FETCH_BOOK:
    default:
        return {...state}
  }
};

export default reducer;
