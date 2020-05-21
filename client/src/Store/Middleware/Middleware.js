import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import middlewares from "./middlewares";
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

const DevMiddlewares = applyMiddleware(
  thunkMiddleware,
  asyncDispatchMiddleware
);
const ProdMiddlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  asyncDispatchMiddleware
);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return ProdMiddlewares;
  } else {
    return DevMiddlewares;
  }
};


const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return middlewares.ProdMiddlewares;
  } else {
    return middlewares.DevMiddlewares;
  }
};

export default composeWithDevTools(getMiddleware());
