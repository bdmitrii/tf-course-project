import { put, call, takeEvery } from 'redux-saga/effects';

import { IUser } from '../actions/authActions';

import { setAuthAction } from '../actions/authActions';
import { SIGN_UP, SIGN_IN } from '../constants/actionTypes';

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

export function* signUpAsync(action: { type: string; payload: IUser }): any {
  try {
    const res = yield call(() => api.signUp(action.payload));
    const { accessToken, refreshToken } = res;

    setAuthToken(accessToken);

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    yield put(setAuthAction());

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

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    yield put(setAuthAction());

    window.location.replace('/stocks');
  } catch (e) {
    console.error(e);
  }
}
