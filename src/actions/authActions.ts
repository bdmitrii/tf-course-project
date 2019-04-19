import { SIGN_UP, SIGN_IN, SET_AUTH, LOGOUT } from '../constants/actionTypes';

export interface IUser {
  login?: string;
  password?: string;
}

export interface IAuth {
  isAuthed: boolean;
}

export function signUpAction(user: IUser) {
  return {
    type: SIGN_UP,
    payload: user
  };
}

export function signInAction(user: IUser) {
  return {
    type: SIGN_IN,
    payload: user
  };
}

export function setAuthAction(auth: IAuth) {
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
