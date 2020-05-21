import { createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
//TODO import getMiddleware from "./Middleware";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";

const loggerMiddleware = createLogger();

const asyncDispatchMiddleware = (store) => (next) => (action) => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach((a) => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });

  next(actionWithAsyncDispatch);
  syncActivityFinished = true;
  flushQueue();
};
const store = createStore(rootReducer,
    composeWithDevTools(
    applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    asyncDispatchMiddleware)
  ));

const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
