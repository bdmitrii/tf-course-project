import {
  GET_STOCKS,
  GET_STOCK_HISTORY,
  GET_STOCKS_SUCCEEDED,
  GET_STOCK_HISTORY_SUCCEEDED
} from '../constants/actionTypes';

import {
  IStocksQuery,
  IStocks,
  IStockHistoryQuery,
  IStockHistory
} from '../constants/interfaces';

export function getStocksAction(query: IStocksQuery) {
  return {
    type: GET_STOCKS,
    payload: query
  };
}

export function getStocksSucceededAction(stocks: IStocks) {
  return {
    type: GET_STOCKS_SUCCEEDED,
    payload: stocks
  };
}

export function getStockHistoryAction(query: IStockHistoryQuery) {
  return {
    type: GET_STOCK_HISTORY,
    payload: query
  };
}

export function getStockHistorySucceededAction(stock: IStockHistory) {
  return {
    type: GET_STOCK_HISTORY_SUCCEEDED,
    payload: stock
  };
}
