import {
  GET_TRANSACTIONS_SUCCEEDED,
  GET_TRANSACTIONS,
  TRANSACTIONS_LOAD_MORE
} from '../constants/actionTypes';
import { ITransaction, IStateTransactions, ITransactions } from '../constants/interfaces';

const initState: IStateTransactions = {
  loading: false,
  history: {
    nextItemId: 0,
    prevItemId: 0,
    items: []
  }
};

export const transactionsReducer = (
  state = initState,
  action: { type: string; payload: ITransactions }
) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        loading: true,
        history: action.payload
      };
    case GET_TRANSACTIONS_SUCCEEDED:
      return {
        loading: false,
        history: action.payload
      };
    case TRANSACTIONS_LOAD_MORE:
      return {
        ...state,
        items: [...state.history.items]
      };
    default:
      return state;
  }
};
