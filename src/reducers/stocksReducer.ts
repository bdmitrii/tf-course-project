import {
  GET_STOCKS_SUCCEEDED,
  STOCKS_LOAD_MORE_SUCCEEDED
} from '../constants/actionTypes';
import { IStocks, IStock } from '../constants/interfaces';

const initState: IStocks = {
  nextItemId: 0,
  prevItemId: 0,
  items: [] as Array<IStock>
};

export const stocksReducer = (
  state = initState,
  action: { type: string; payload: IStocks }
) => {
  switch (action.type) {
    case GET_STOCKS_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      };
    case STOCKS_LOAD_MORE_SUCCEEDED:
      return {
        ...state,
        items: [...state.items, ...action.payload.items]
      };
    default:
      return state;
  }
};
