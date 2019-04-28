import { SET_AUTH } from '../constants/actionTypes';
import { IAuthenticated } from '../constants/interfaces';

const initState: IAuthenticated = {
  isAuthenticated: false
};

export const authReducer = (
  state = initState,
  action: { type: string; payload: IAuthenticated }
) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
