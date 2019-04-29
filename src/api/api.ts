import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import {
  IRefresh,
  ITransactionQuery,
  IUserAuth,
  IStocksQuery
} from '../constants/interfaces';

export default class Api {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://warm-citadel-97897.herokuapp.com/api',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  signUp(user: IUserAuth) {
    return this.http.post('/auth/signup', user, {});
  }

  signIn(user: IUserAuth) {
    return this.http.post('/auth/signin', user);
  }

  refreshToken(token: IRefresh) {
    return this.http.post('/auth/refresh', token);
  }

  getAccountInfo() {
    return this.http.get('/account/info');
  }

  getStocks(stocksListInfo: IStocksQuery) {
    return this.http.get(
      `/stocks?search=${stocksListInfo.search || ''}&count=${stocksListInfo.count ||
        ''}&itemId=${stocksListInfo.itemId || ''}`
    );
  }

  getStockHistory(id: number) {
    return this.http.get(`/stocks/${id}/history`);
  }

  buyStocks(transQuery: ITransactionQuery) {
    return this.http.post(`/transaction/buy`, transQuery);
  }

  sellStocks(transQuery: ITransactionQuery) {
    return this.http.post('/transaction/sell', transQuery);
  }

  getTransactions(query: IStocksQuery) {
    return this.http.get(
      `/transaction/history?search=${query.search || ''}&itemId=${query.itemId ||
        ''}&count=${query.count || ''}`
    );
  }
}
