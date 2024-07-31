import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alert
  const showAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => {
      return dispatch({ type: REMOVE_ALERT });
    }, 4500);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
