import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./Reducer";
import Middleware from "./Middleware/";

const store = createStore(rootReducer, Middleware);
const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
