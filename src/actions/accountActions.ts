import { GET_ACCOUNT_INFO } from '../constants/actionTypes';

export interface IAccountInfo {
  name: string;
  balance: number;
  // stocks:
}

export function getAccountInfoAction() {
  return {
    type: GET_ACCOUNT_INFO
  };
}

export function getAccountInfoSucceededAction() {}
