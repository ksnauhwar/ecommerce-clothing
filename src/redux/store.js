import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
