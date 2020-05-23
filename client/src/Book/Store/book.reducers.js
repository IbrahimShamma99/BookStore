import * as BookActions from "./book.actions";
import initialState from "./book.constants";
import * as api from "../Utils/api";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
      api.create().then(data=>{
        if (data.error){
          action.asyncDispatch({type:BookActions.SUCCESS,message:data.error})
        }
        else {
          action.asyncDispatch({type:BookActions.SUCCESS,data})
        }
      })
      return {...state}
    case BookActions.FETCH_BOOK:
    default:
      return { ...state };
  }
};

export default reducer;
