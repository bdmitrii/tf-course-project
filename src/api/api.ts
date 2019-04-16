import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IUser {
  login?: string;
  password?: string;
}

const mocksURL = 'https://stocks-mocks.herokuapp.com/api';

export default class Api {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://warm-citadel-97897.herokuapp.com/api',
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
}
