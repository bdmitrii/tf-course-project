import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { IRefresh } from '../actions/authActions';

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
      baseURL: back3,
      headers: { 'Content-Type': 'application/json' }
    });
    // this.http = axios.create({ baseURL: mocksURL });
  }

  signUp(user: IUser) {
    return this.http.post('/auth/signup', user, {}).then(({ data }) => data);
  }

  signIn(user: IUser) {
    return this.http.post('/auth/signin', user).then(({ data }) => data);
  }

  refreshToken(token: IRefresh) {
    return this.http.post('/auth/refresh', token).then(({ data }) => data);
  }

  getAccountInfo() {
    return this.http.get('/account/info').then(({ data }) => data);
  }

  getStocks(stocksListInfo: IStocksListInfo) {
    return this.http.get(
      `/stocks?search=${stocksListInfo.search}&count=${stocksListInfo.count}&itemId=${
        stocksListInfo.itemId
      }`
    );
  }
}
