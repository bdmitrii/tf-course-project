import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IRefresh, ITransactionQuery } from '../constants/interfaces';

interface IUser {
  login?: string;
  password?: string;
}

interface IStocksListInfo {
  search?: string;
  count?: number;
  itemId?: number;
}

export default class Api {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://warm-citadel-97897.herokuapp.com/api',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  signUp(user: IUser) {
    return this.http.post('/auth/signup', user, {});
  }

  signIn(user: IUser) {
    return this.http.post('/auth/signin', user);
  }

  refreshToken(token: IRefresh) {
    return this.http.post('/auth/refresh', token);
  }

  getAccountInfo() {
    return this.http.get('/account/info');
  }

  getStocks(stocksListInfo: IStocksListInfo) {
    return this.http.get(`/stocks`);
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

  getTransactions(query: IStocksListInfo) {
    return this.http.get(`/transaction/history`);
  }
}
