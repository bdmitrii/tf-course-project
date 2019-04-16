import { SET_AUTH } from '../constants/actionTypes';

const initState = {
  isAuthed: false
};

export const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthed: true
      };

    default:
      return state;
  }
};
