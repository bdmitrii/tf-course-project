import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IRefresh } from '../constants/interfaces';

interface IUser {
  login?: string;
  password?: string;
}

interface IStocksListInfo {
  search?: string;
  count?: number;
  itemId?: number;
}

const mocksURL = 'https://stocks-mocks.herokuapp.com/api';
const back1 = 'https://warm-citadel-97897.herokuapp.com/api';
const back2 = 'https://stocks-store-202.herokuapp.com/api';
const back3 = 'http://secret-hamlet-78538.herokuapp.com';

export default class Api {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: back1,
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
}
