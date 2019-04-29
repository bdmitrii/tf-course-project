import {
  GET_STOCKS_SUCCEEDED,
  STOCKS_LOAD_MORE_SUCCEEDED,
  STOCKS_SET_SEARCH,
  GET_STOCKS
} from '../constants/actionTypes';
import { IStocks, IStock, IStateStocks } from '../constants/interfaces';

const initState: IStateStocks = {
  nextItemId: 0,
  prevItemId: 0,
  items: [] as Array<IStock>,
  search: '',
  loading: false
};

export const stocksReducer = (
  state = initState,
  action: { type: string; payload: IStateStocks }
) => {
  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        loading: true
      };
    case GET_STOCKS_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case STOCKS_LOAD_MORE_SUCCEEDED:
      return {
        ...state,
        items: [...state.items, ...action.payload.items]
      };
    case STOCKS_SET_SEARCH:
      return {
        ...state,
        search: action.payload.search
      };
    default:
      return state;
  }
};
