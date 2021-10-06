import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const enhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer, enhancers);
export const persistor = persistStore(store);
