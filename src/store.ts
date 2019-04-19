import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import rootReducer from './reducers';

export interface IStock {
  id: number;
  code: string;
  name: string;
  iconUrl: string;
  price: number;
  priceDelta: number;
}

export interface IState {
  auth?: {
    isAuthed: boolean;
  };
  allStocks?: {
    nextItemId: number;
    prevNumberId: number;
    items: Array<IStock>;
  };
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
