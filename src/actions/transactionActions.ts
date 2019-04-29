import {
  BUY_STOCKS,
  SELL_STOCKS,
  BUY_STOCKS_SUCCEEDED,
  SELL_STOCKS_SUCCEEDED,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_SUCCEEDED,
  TRANSACTIONS_LOAD_MORE,
  TRANSACTIONS_LOAD_MORE_SUCCEEDED
} from '../constants/actionTypes';

import { ITransactionQuery, ITransactions, IStocksQuery } from '../constants/interfaces';

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

export function getTransactionsAction(query: IStocksQuery) {
  return {
    type: GET_TRANSACTIONS,
    payload: query
  };
}

export function getTransactionsSucceededAction(payload: ITransactions) {
  return {
    type: GET_TRANSACTIONS_SUCCEEDED,
    payload
  };
}

export function transactionsLoadMoreAction(payload: IStocksQuery) {
  return {
    type: TRANSACTIONS_LOAD_MORE,
    payload
  };
}

export function transactionsLoadMoreActionSucceeded(payload: ITransactions) {
  return {
    type: TRANSACTIONS_LOAD_MORE_SUCCEEDED,
    payload
  };
}
