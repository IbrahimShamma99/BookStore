import * as BookActions from "./book.actions";
import initialState from "./book.constants";
import * as api from "../Utils/api";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
      api.create(state.book,action.user).then(data=>{
        if (data.error){
          action.asyncDispatch({type:BookActions.ERROR,message:data.error})
        }
        else {
          action.asyncDispatch({type:BookActions.CREATE_SUCCESS,data})
        }
      })
      return {...state}
      case BookActions.CREATE_SUCCESS:
        return {
          ...state,
          book:action.data.book
        }
    case BookActions.SUCCESS:
      return {
        ...state
      }
    case BookActions.FETCH_BOOK:
      break;

    case BookActions.MODIFY:
      return {
        ...state,
        book:{
          ...state.book,
          [action.name]:action.value
        }
      }
    case BookActions.FETCH_FEED:
      api.feed().then(data=>{
        state.feed = data.books;
        console.log("state=",state)
        return {
          ...state
        }
      })
      return {...state}
    default:
      return { ...state };
  }
};

export default reducer;
