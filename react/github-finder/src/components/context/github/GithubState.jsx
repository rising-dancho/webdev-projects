import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import axios from '';
import githubReducer from './githubReducer';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  REMOVE_ALERT,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search user

  // Get user

  // Get repos

  // Clear users

  // Set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
