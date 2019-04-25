import {
  SIGN_UP,
  SIGN_IN,
  SET_AUTH,
  REFRESH_TOKEN,
  LOGOUT
} from '../constants/actionTypes';

import { IUserAuth, IRefresh, IAuthenticated } from '../constants/interfaces';

export function signUpAction(user: IUserAuth) {
  return {
    type: SIGN_UP,
    payload: user
  };
}

export function signInAction(user: IUserAuth) {
  return {
    type: SIGN_IN,
    payload: user
  };
}

export function setAuthAction(auth: IAuthenticated) {
  return {
    type: SET_AUTH,
    payload: auth
  };
}

export function logoutAction() {
  return {
    type: LOGOUT
  };
}

export function refreshToken(token: IRefresh) {
  return {
    type: REFRESH_TOKEN,
    payload: token
  };
}
