import {
  BUY_STOCKS,
  SELL_STOCKS,
  BUY_STOCKS_SUCCEEDED,
  SELL_STOCKS_SUCCEEDED,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCEEDED
} from '../constants/actionTypes';

import { ITransactionQuery, ITransactions } from '../constants/interfaces';

export function buyStocksAction(query: ITransactionQuery) {
  return {
    type: BUY_STOCKS,
    payload: query
  };
}

export function buyStocksSucceededAction() {
  return {
    type: BUY_STOCKS_SUCCEEDED
  };
}

export function sellStocksAction(query: ITransactionQuery) {
  return {
    type: SELL_STOCKS,
    payload: query
  };
}

export function sellStocksSucceededAction() {
  return {
    type: SELL_STOCKS_SUCCEEDED
  };
}

export function getTransactionsAction() {
  return {
    type: GET_TRANSACTIONS
  };
}

export function getTransactionsSucceededAction(payload: ITransactions) {
  return {
    type: GET_TRANSACTIONS_SUCCEEDED,
    payload
  };
}
