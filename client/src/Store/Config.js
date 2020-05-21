import storage from "redux-persist/lib/storage";

const persistConfig = {
  user: {
    key: "user",
    storage: storage,
  },
  util: {
    key: "util",
    storage: storage,
  },
};

export default persistConfig;
