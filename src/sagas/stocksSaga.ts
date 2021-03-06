import { put, call, takeEvery } from 'redux-saga/effects';

import { refreshToken } from '../actions/authActions';
import {
  GET_STOCKS,
  GET_STOCK_HISTORY,
  STOCKS_LOAD_MORE
} from '../constants/actionTypes';

import { IStockHistoryQuery } from '../constants/interfaces';

import {
  getStocksSucceededAction,
  getStockHistorySucceededAction,
  stocksLoadMoreSucceededAction
} from '../actions/stocksActions';
import { IStocksQuery } from '../constants/interfaces';

import { getRefreshToken } from '../utils/localStorage';
import API from '../api';

const { api } = API;

export function* watchGetStocks() {
  yield takeEvery(GET_STOCKS, getStocks);
}

export function* watchGetStockHistory() {
  yield takeEvery(GET_STOCK_HISTORY, getStockHistory);
}

export function* watchStockLoadMore() {
  yield takeEvery(STOCKS_LOAD_MORE, stocksLoadMore);
}

export function* stocksLoadMore(action: { type: string; payload: IStocksQuery }) {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));
    const res = yield call(() => api.getStocks(action.payload));

    yield put(stocksLoadMoreSucceededAction(res.data));
  } catch (err) {
    console.log(err.response);
    if (err.response.data.code === '400') {
      yield put(refreshToken({ refreshToken: getRefreshToken() }));
    }
  }
}

export function* getStocks(action: { type: string; payload: IStocksQuery }): any {
  try {
    // yield put(refreshToken({ refreshToken: getRefreshToken() }));
    const res = yield call(() => api.getStocks(action.payload));

    yield put(getStocksSucceededAction(res.data));
  } catch (err) {
    console.log(err.response);
    if (err.response.data.code === '400') {
      yield put(refreshToken({ refreshToken: getRefreshToken() }));
    }
  }
}

export function* getStockHistory(action: { type: string; payload: IStockHistoryQuery }) {
  try {
    const res = yield call(() => api.getStockHistory(action.payload.id));

    const { data } = res;
    yield put(getStockHistorySucceededAction(data));
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
