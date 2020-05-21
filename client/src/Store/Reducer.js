import userReducer from "../USER/Store/user.reducers";
import utileReducer from "../UtilStore/util.reducers";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import persistConfig from "./Config";

const rootReducer = combineReducers({
  util: persistReducer(persistConfig.util, utileReducer),
  UserState: persistReducer(persistConfig.user, userReducer),
});

export default rootReducer;
