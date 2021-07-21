import {createStore,applyMiddleware} from 'redux';
import loggerMiddleware from './addOns/logger.middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';
import rootReducer from './root-reducer';


const middlewares = [loggerMiddleware];
const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer,enhancers);
export const persistor = persistStore(store);


