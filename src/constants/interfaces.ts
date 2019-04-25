export interface IUserAuth {
  login: string;
  password: string;
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

export interface IStockHistory extends IStock {
  history: Array<IHistory>;
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
