import { all, fork } from 'redux-saga/effects';

import { watchSignUp, watchSignIn, watchLogout } from './authSaga';
import { watchGetAccountInfo } from './accountSaga';

export default function* rootSaga() {
  yield all([watchSignUp(), watchSignIn(), watchLogout(), watchGetAccountInfo()]);
}
