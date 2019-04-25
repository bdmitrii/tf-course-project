import { SET_ERROR, CLEAR_ERROR } from '../constants/actionTypes';

const initState: string | null = null;

export function errorReducer(
  state = initState,
  action: { type: string; payload: string }
): string | null {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}
