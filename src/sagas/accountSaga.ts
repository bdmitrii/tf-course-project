import { put, call, takeEvery } from 'redux-saga/effects';

import { setAuthAction, refreshToken } from '../actions/authActions';
import { GET_ACCOUNT_INFO } from '../constants/actionTypes';

import API from '../api';
import { getAccountInfoSucceededAction } from '../actions/accountActions';
import { getRefreshToken } from '../utils/localStorage';

const { api } = API;

export function* watchGetAccountInfo() {
  yield takeEvery(GET_ACCOUNT_INFO, getAccountInfo);
}

export function* getAccountInfo(action: { type: string }): any {
  try {
    yield put(refreshToken({ refreshToken: getRefreshToken() }));
    const res = yield call(() => api.getAccountInfo());

    const { data } = res;

    yield put(getAccountInfoSucceededAction(data));
  } catch (e) {
    console.error(e);
  }
}
