import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistConfig from "./Config";
//SECTION Reducers
import userReducer from "../USER/Store/user.reducers";
import utileReducer from "../UtilStore/util.reducers";
import bookReducer from "../Book/Store/book.reducers";

const rootReducer = combineReducers({
  util: persistReducer(persistConfig.util, utileReducer),
  UserState: persistReducer(persistConfig.user, userReducer),
  BookState:persistReducer(persistConfig.book, bookReducer),
});

export default rootReducer;
