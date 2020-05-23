import * as BookActions from "./book.actions";
import initialState from "./book.constants";
import * as api from "../Utils/api";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
      api.create(state.book).then(data=>{
        if (data.error){
          action.asyncDispatch({type:BookActions.SUCCESS,message:data.error})
        }
        else {
          if (state.book.cover){
            api.uploadCover(state.book._id,state.cover)
          }
          action.asyncDispatch({type:BookActions.SUCCESS,data})
        }
      })
      return {...state}
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
    default:
      return { ...state };
  }
};

export default reducer;
