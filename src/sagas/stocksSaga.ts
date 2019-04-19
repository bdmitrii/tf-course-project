import { put, call, takeEvery } from 'redux-saga/effects';

import { refreshToken } from '../actions/authActions';
import {
  GET_STOCKS,
  GET_STOCK,
  GET_STOCKS_SUCCEEDED,
  GET_STOCK_SUCCEEDED
} from '../constants/actionTypes';

import { IStocksQuery, getStocksSucceededAction } from '../actions/stocksActions';

import setAuthToken from '../utils/setAuthToken';
import { getRefreshToken } from '../utils/localStorage';
import API from '../api';

const { api } = API;

export function* watchGetStocks() {
  yield takeEvery(GET_STOCKS, getStocks);
}

export function* getStocks(action: { type: string; payload: IStocksQuery }): any {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));
    const res = yield call(() => api.getStocks(action.payload));

    yield put(getStocksSucceededAction(res.data));
  } catch (err) {
    console.log(err.response);
    if (err.response.data.code === '400') {
      yield put(refreshToken({ refreshToken: getRefreshToken() }));
    }
  }
}
