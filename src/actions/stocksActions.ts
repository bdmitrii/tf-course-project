import {
  GET_STOCKS,
  GET_STOCK,
  GET_STOCKS_SUCCEEDED,
  GET_STOCK_SUCCEEDED
} from '../constants/actionTypes';

export interface IStock {
  id: number;
  code: string;
  name: string;
  iconUrl: string;
  price: number;
  deltaPrice: number;
}

export interface IHistory {
  date: string;
  price: number;
}

export interface IStockHistory extends IStock {
  history: Array<IHistory>;
}

export interface IStocksQuery {
  search?: string;
  count?: number;
  itemId?: number;
}

export interface IStockQuery {
  id: number;
  range?: string;
}

export interface IStocks {
  nextItemsId: number;
  prevItemId: number;
  items: Array<IStock>;
}

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

export function getStockAction(query: IStockQuery) {
  return {
    type: GET_STOCK,
    payload: query
  };
}

export function getStockSucceededAction(stock: IStockHistory) {
  return {
    type: GET_STOCK_SUCCEEDED,
    payload: stock
  };
}
