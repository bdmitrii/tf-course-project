export interface IUserAuth {
  login: string;
  password: string;
}

export interface IStockBase {
  id: number;
  code: string;
  name: string;
  iconUrl: string;
  price: number;
  priceDelta: number;
}

export interface IStock {
  id: number;
  code: string;
  name: string;
  iconUrl: string;
  price: number;
  priceDelta: number;
}

export interface IState {
  auth: IAuthenticated;
  allStocks: IStocks;
  error: string;
  histories: Array<IStockHistory>;
  account: IAccountInfo;
}

export interface IRefresh {
  refreshToken: string;
}

export interface IAuthenticated {
  isAuthenticated: boolean;
}

export interface IHistory {
  date: string;
  price: number;
}

export interface IStockHistory {
  history: Array<IHistory>;
  from: string;
  to: string;
  stockId: number;
  code: string;
  name: string;
  iconUrl: string;
  price: number;
  priceDelta: number;
}

export interface IAccountStock extends IStock {
  count: number;
}

export interface IAccountInfo {
  name: string;
  balance: number;
  stocks: Array<IAccountStock>;
}

export interface IStocksQuery {
  search?: string;
  count?: number;
  itemId?: number;
}

export interface IStockHistoryQuery {
  id: number;
  range?: string;
}

export interface IStocks {
  nextItemsId: number;
  prevItemId: number;
  items: Array<IStock>;
}
