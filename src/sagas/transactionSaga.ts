import { put, call, takeEvery } from 'redux-saga/effects';

import { refreshToken } from '../actions/authActions';
import { BUY_STOCKS, SELL_STOCKS, GET_TRANSACTIONS } from '../constants/actionTypes';

import { IStockHistoryQuery, ITransactionQuery } from '../constants/interfaces';

import {
  buyStocksSucceededAction,
  sellStocksSucceededAction,
  getTransactionsSucceededAction
} from '../actions/transactionActions';
import { IStocksQuery } from '../constants/interfaces';

import setAuthToken from '../utils/setAuthToken';
import { getRefreshToken } from '../utils/localStorage';
import API from '../api';

const { api } = API;

export function* watchGetTransactions() {
  yield takeEvery(GET_TRANSACTIONS, getTransactions);
}

export function* watchSellStock() {
  yield takeEvery(SELL_STOCKS, sellStocks);
}

export function* watchBuyStock() {
  yield takeEvery(BUY_STOCKS, buyStocks);
}

export function* getTransactions(action: { type: string; payload: IStocksQuery }): any {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));
    const res = yield call(() => api.getTransactions(action.payload));

    yield put(getTransactionsSucceededAction(res.data));
  } catch (err) {
    console.log(err);
  }
}

export function* sellStocks(action: { type: string; payload: ITransactionQuery }) {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));

    const res = yield call(() => api.sellStocks(action.payload));

    yield put(sellStocksSucceededAction());
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export function* buyStocks(action: { type: string; payload: ITransactionQuery }) {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));

    const res = yield call(() => api.buyStocks(action.payload));

    yield put(buyStocksSucceededAction());
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
