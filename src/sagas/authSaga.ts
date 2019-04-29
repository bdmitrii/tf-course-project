import { put, call, takeEvery } from 'redux-saga/effects';

import { IUserAuth, IRefresh } from '../constants/interfaces';

import { setAuthAction, logoutAction } from '../actions/authActions';
import { setErrorAction } from '../actions/errorActions';
import { SIGN_UP, SIGN_IN, REFRESH_TOKEN, LOGOUT } from '../constants/actionTypes';

import { saveTokensToStorage, removeTokensFromStorage } from '../utils/localStorage';
import setAuthToken from '../utils/setAuthToken';
import API from '../api';

const { api } = API;

export function* watchSignUp() {
  yield takeEvery(SIGN_UP, signUpAsync);
}

export function* watchSignIn() {
  yield takeEvery(SIGN_IN, signInAsync);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

export function* logout() {
  removeTokensFromStorage();

  setAuthToken(false);

  yield put(setAuthAction({ isAuthenticated: false }));
  // window.location.replace('/signin');
}

export function* signUpAsync(action: { type: string; payload: IUserAuth }): any {
  try {
    const res = yield call(() => api.signUp(action.payload));

    const { accessToken, refreshToken } = res.data;

    setAuthToken(accessToken);

    saveTokensToStorage(accessToken, refreshToken);

    yield put(setAuthAction({ isAuthenticated: true }));

    // window.location.replace('/stocks');
  } catch (e) {
    const { code } = e.response.data;

    yield put(setErrorAction(code));
  }
}

export function* signInAsync(action: any): any {
  try {
    const res = yield call(() => api.signIn(action.payload));
    const { accessToken, refreshToken } = res.data;

    setAuthToken(accessToken);
    saveTokensToStorage(accessToken, refreshToken);

    yield put(setAuthAction({ isAuthenticated: true }));

    window.location.replace('/stocks');
    console.log(res);
  } catch (e) {
    const { message } = e.response.data;

    yield put(setErrorAction(message));
  }
}

export function* watchRefreshToken() {
  yield takeEvery(REFRESH_TOKEN, refreshToken);
}

export function* refreshToken(action: { type: string; payload: IRefresh }): any {
  try {
    const res = yield call(() => api.refreshToken(action.payload));
    const { accessToken, refreshToken } = res.data;

    setAuthToken(accessToken);
    saveTokensToStorage(accessToken, refreshToken);
  } catch (e) {
    yield put(logoutAction());
  }
}
