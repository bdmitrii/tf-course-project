import { combineReducers } from 'redux';

import { authReducer as auth } from './authReducer';
import { stocksReducer as allStocks } from './stocksReducer';

const rootReducer = combineReducers({ auth, allStocks });

export default rootReducer;
