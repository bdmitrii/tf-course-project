import { put, call, takeEvery } from 'redux-saga/effects';

import { setAuthAction } from '../actions/authActions';
import { GET_ACCOUNT_INFO, GET_ACCOUNT_INFO_SUCCEEDED } from '../constants/actionTypes';

import setAuthToken from '../utils/setAuthToken';
import API from '../api';

const { api } = API;

export function* watchGetAccountInfo() {
  yield takeEvery(GET_ACCOUNT_INFO, getAccountInfo);
}

export function* getAccountInfo(action: { type: string }): any {
  try {
    const data = yield call(() => api.getAccountInfo());

    yield put(setAuthAction());

    window.location.replace('/stocks');
  } catch (e) {
    console.error(e);
  }
}
