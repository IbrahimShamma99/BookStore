const bookState = {
  _id: "",
  title: "",
  brief: "",
  author: "",
  owner: "",
  reviews: [],
  cover: {},
  genre: "",
  comments:[]
};

const initialState = {
  book: { ...bookState },
  feed: [],
  userbooks: [{ ...bookState }],
  show: false,
  open_error:false,
  open_message:false,
  error: "",
  message: "",
};

export default initialState;
