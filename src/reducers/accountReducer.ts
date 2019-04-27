import { GET_ACCOUNT_INFO_SUCCEEDED } from '../constants/actionTypes';
import { IAccountStock, IAccountInfo } from '../constants/interfaces';

const initState = {
  name: '',
  balance: 0,
  stocks: []
};

export const accountReducer = (
  state: IAccountInfo = initState,
  action: { type: string; payload: IAccountInfo }
) => {
  switch (action.type) {
    case GET_ACCOUNT_INFO_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};
