import { GET_STOCK_HISTORY, GET_STOCK_HISTORY_SUCCEEDED } from '../constants/actionTypes';
import { IStockHistory } from '../constants/interfaces';

const initState: Array<IStockHistory> = [];

export function historiesReducer(
  state: Array<IStockHistory> = initState,
  action: { type: string; payload: IStockHistory }
) {
  switch (action.type) {
    case GET_STOCK_HISTORY_SUCCEEDED:
      return [...state.filter(stock => stock.id !== action.payload.id), action.payload];
    default:
      return state;
  }
}
