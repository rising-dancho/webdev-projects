import { SET_ALERT, REMOVE_ALERT } from '../types';

// state is immutable: we cant re-assign it.
// we just can only make a copy out of it.
// we make a copy of it by using ...state
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        alert: action.payload,
      };

    case REMOVE_ALERT:
      return {
        alert: null,
      };

    default:
      return state;
  }
};
