import {
  GET_STOCKS,
  GET_STOCK_HISTORY,
  GET_STOCKS_SUCCEEDED,
  GET_STOCK_HISTORY_SUCCEEDED,
  STOCKS_LOAD_MORE,
  STOCKS_LOAD_MORE_SUCCEEDED,
  STOCKS_SET_SEARCH
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

export function stocksLoadMoreAction(query: IStocksQuery) {
  return {
    type: STOCKS_LOAD_MORE,
    payload: query
  };
}

export function stocksLoadMoreSucceededAction(stocks: IStocks) {
  return {
    type: STOCKS_LOAD_MORE_SUCCEEDED,
    payload: stocks
  };
}

export function setStocksSearchAciton(search: string) {
  return {
    type: STOCKS_SET_SEARCH,
    payload: { search }
  };
}
