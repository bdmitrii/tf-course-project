import { GET_STOCKS_SUCCEEDED } from '../constants/actionTypes';
import { IStockHistory } from '../constants/interfaces';

const initState = {
  nextItemId: null,
  prevItemId: null,
  items: []
};

export const stocksReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_STOCKS_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};
