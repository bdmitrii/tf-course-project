import { SIGN_UP, SIGN_IN, SET_AUTH } from '../constants/actionTypes';

export interface IUser {
  login?: string;
  password?: string;
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

export function setAuthAction() {
  return {
    type: SET_AUTH
  };
}
