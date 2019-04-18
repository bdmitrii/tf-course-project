import { all, fork } from 'redux-saga/effects';

import { watchSignUp, watchSignIn } from './authSaga';
import { watchGetAccountInfo } from './accountSaga';

export default function* rootSaga() {
  yield all([watchSignUp(), watchSignIn()]);
}
