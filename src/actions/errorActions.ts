import { SET_ERROR, GET_ERROR, CLEAR_ERROR } from '../constants/actionTypes';

export function setErrorAction(error: string) {
  return {
    type: SET_ERROR,
    payload: error
  };
}

export function getErrorAction() {
  return {
    type: GET_ERROR
  };
}

export function clearErrorAction() {
  return {
    type: CLEAR_ERROR
  };
}
