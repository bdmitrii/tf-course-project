import { all, fork } from 'redux-saga/effects';

import { watchSignUp, watchSignIn, watchLogout, watchRefreshToken } from './authSaga';
import { watchGetAccountInfo } from './accountSaga';
import { watchGetStocks, watchGetStockHistory } from './stocksSaga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchLogout(),
    watchGetAccountInfo(),
    watchGetStocks(),
    watchRefreshToken(),
    watchGetStockHistory()
  ]);
}
