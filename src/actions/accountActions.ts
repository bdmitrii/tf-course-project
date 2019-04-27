import { GET_ACCOUNT_INFO, GET_ACCOUNT_INFO_SUCCEEDED } from '../constants/actionTypes';
import { IAccountInfo } from '../constants/interfaces';

export function getAccountInfoAction() {
  return {
    type: GET_ACCOUNT_INFO
  };
}

export function getAccountInfoSucceededAction(payload: IAccountInfo) {
  return {
    type: GET_ACCOUNT_INFO_SUCCEEDED,
    payload
  };
}
