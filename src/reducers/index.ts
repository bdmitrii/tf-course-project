import { combineReducers } from 'redux';

import { authReducer as auth } from './authReducer';
import { stocksReducer as allStocks } from './stocksReducer';
import { errorReducer as error } from './errorReducer';
import { historiesReducer as histories } from './historiesReducer';
import { accountReducer as account } from './accountReducer';
import { transactionsReducer as transactions } from './transactionsReducer';

const rootReducer = combineReducers({
  auth,
  allStocks,
  histories,
  error,
  account,
  transactions
});

export default rootReducer;
