import { createContext, useReducer } from 'react';

const WorkoutContext = createContext();

const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUT':
      return {
        workouts: action.payload,
      };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

function WorkoutContextProvider({ children }) {
  const [state, dispatch] = useReducer(workoutReducer, { workouts: null });

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export { WorkoutContext, WorkoutContextProvider, workoutReducer };
