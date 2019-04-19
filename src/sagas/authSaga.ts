import { put, call, takeEvery } from 'redux-saga/effects';

import { IUser, IRefresh } from '../actions/authActions';

import { setAuthAction } from '../actions/authActions';
import { SIGN_UP, SIGN_IN, REFRESH_TOKEN, LOGOUT } from '../constants/actionTypes';

import { saveTokensToStorage, removeTokensFromStorage } from '../utils/localStorage';
import setAuthToken from '../utils/setAuthToken';
import API from '../api';

const { api } = API;

export function* watchSignUp() {
  yield takeEvery(SIGN_UP, signUpAsync);
  console.log('Dispatched signup');
}

export function* watchSignIn() {
  console.log('Dispatched SignIn');
  yield takeEvery(SIGN_IN, signInAsync);
}

export function* watchLogout() {
  console.log('Logout');

  yield takeEvery(LOGOUT, logout);
}

export function* logout() {
  removeTokensFromStorage();

  setAuthToken(false);

  yield put(setAuthAction({ isAuthed: false }));
}

export function* signUpAsync(action: { type: string; payload: IUser }): any {
  try {
    const res = yield call(() => api.signUp(action.payload));
    const { accessToken, refreshToken } = res;

    setAuthToken(accessToken);

    saveTokensToStorage(accessToken, refreshToken);

    yield put(setAuthAction({ isAuthed: true }));

    window.location.replace('/stocks');
  } catch (e) {
    console.error(e);
  }
}

export function* signInAsync(action: any): any {
  try {
    const res = yield call(() => api.signIn(action.payload));
    const { accessToken, refreshToken } = res;

    setAuthToken(accessToken);

    saveTokensToStorage(accessToken, refreshToken);

    yield put(setAuthAction({ isAuthed: true }));

    window.location.replace('/stocks');
  } catch (e) {
    console.error(e);
  }
}

export function* watchRefreshToken() {
  console.log('Dispatched Refresh');
  yield takeEvery(REFRESH_TOKEN, refreshToken);
}

export function* refreshToken(action: { type: string; payload: IRefresh }): any {
  try {
    const res = yield call(() => api.refreshToken(action.payload));
    const { accessToken, refreshToken } = res;

    setAuthToken(accessToken);
    saveTokensToStorage(accessToken, refreshToken);
  } catch (e) {
    console.log(e);
  }
}
