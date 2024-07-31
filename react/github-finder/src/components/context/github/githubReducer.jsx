import React from 'react';
import {
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
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

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    default:
      return state;
  }
};
