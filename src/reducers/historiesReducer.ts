import { GET_STOCK_HISTORY, GET_STOCK_HISTORY_SUCCEEDED } from '../constants/actionTypes';
import { IStockHistory } from '../constants/interfaces';

const initState: Array<IStockHistory> = [];

export function historiesReducer(
  state: Array<IStockHistory> = initState,
  action: { type: string; payload: IStockHistory }
) {
  switch (action.type) {
    case GET_STOCK_HISTORY_SUCCEEDED:
      console.log(action.payload);
      return [
        ...state.filter(stock => stock.stockId !== action.payload.stockId),
        action.payload
      ];
    default:
      return state;
  }
}
