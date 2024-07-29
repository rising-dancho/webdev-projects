import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import axios from 'axios';
import githubReducer from './githubReducer';
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search users
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );

    // setUsers(res.data.items);
    // payload: is the data that we want to send
    // type: is the action that we want the reducer to do
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get user

  // Get repos

  // Clear users

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
