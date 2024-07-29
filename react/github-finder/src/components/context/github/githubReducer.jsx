import React from 'react';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  REMOVE_ALERT,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
} from '../types';

// state is immutable: we cant re-assign it.
// we just can only make a copy out of it.
// we make a copy of it by using ...state
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
