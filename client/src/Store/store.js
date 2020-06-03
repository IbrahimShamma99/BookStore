import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";
import asyncDispatchMiddleware from "async-dispatch";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, loggerMiddleware, asyncDispatchMiddleware)
  )
);

const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
