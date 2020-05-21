import { createStore } from "redux";
import rootReducer from './Reducer';


const store = createStore(rootReducer);

const persistor = persistStore(store);

const StoreComponent = { persistor, store };

export default StoreComponent;
