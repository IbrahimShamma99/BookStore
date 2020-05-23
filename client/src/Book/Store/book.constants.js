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
  feed: [],
  userbooks:[{...bookState}],
  show:false,
  open:false,
  error:"",
  message:""
};

export default initialState;