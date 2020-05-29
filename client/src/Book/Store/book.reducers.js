import * as BookActions from "./book.actions";
import initialState from "./book.constants";
import * as api from "../Utils/api";

const reducer = (state = initialState, action) => {
  const bookInfo = { book: state.book };
  switch (action.type) {
    case BookActions.COMMENT:
      api.comment(action.ID,action.userID,action.comment).then(data=>{
        console.log("data",data)
        action.asyncDispatch({
          type:BookActions.SUCCESS,
          data
        })
      })
      return {...state}
    case BookActions.REACT: 
        return {...state}  
    case BookActions.REFRESH_BOOK:
      return {
        ...state,
        open_message:false,
        open_error:false,
        error:"",
        message:""        
      }
    case BookActions.ERROR:
      return {
        ...state,
        open_error:true,
        error:action.error
      };
    case BookActions.CREATE_BOOK:
      api.create(state.book, action.user).then((data) => {
        if (data.error) {
          action.asyncDispatch({
            type: BookActions.ERROR,
            error: data.error
          });
        } else {
          action.asyncDispatch({
            type: BookActions.CREATE_SUCCESS,
            data,
            message:"Book added successfully",
            user: action.user,
          });
        }
      });
      return { ...state };
    case BookActions.CREATE_SUCCESS:
      if (state.book.cover) {
        api.uploadCover(action.data.book._id, bookInfo.book.cover, action.user);
      }
      return {
        ...state,
        book: action.data.book,
        message:action.message,
        open_message:true,
        open_error:false,
      };
    case BookActions.SUCCESS:
      if (action.data) {
        return {
          ...state,
          ...action.data,
          message:action.message,
          open_message:true,
          open_error:false,
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
      if (state.book.cover) {
        api.uploadCover(bookInfo.book._id, bookInfo.book.cover, action.user);
      }
      api.update(bookInfo, action.user).then((data) => {
        if (data.error){
          action.asyncDispatch({
            type: BookActions.ERROR,
            error: data.error
          });
        }
        action.asyncDispatch({ type: BookActions.SUCCESS,message:"updated successfully" ,data: data });
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
      api.feed(action.genre).then((data) => {
        action.asyncDispatch({ type: BookActions.SUCCESS, data });
        return {
          ...state,
          feed:{}
        };
      });
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
