import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import axios from 'axios';
import githubReducer from './githubReducer';
import {
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING,
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
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );
    // console.log(res.data);
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${
        import.meta.env.VITE_CLIENT_ID
      }&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    );
    // console.log(res.data);
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set alert
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 4500);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        showAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
