import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import middlewares from "./middlewares";
const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return middlewares.ProdMiddlewares;
  } else {
    return middlewares.DevMiddlewares;
  }
};

export default composeWithDevTools(getMiddleware());
