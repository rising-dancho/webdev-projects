// Hook : useState
// - react state is a plain js object used by react to tell the component's current state
import { useState, useEffect } from 'react';

// ALL HOOKS:
// https://legacy.reactjs.org/docs/hooks-reference.html

function ReactHooks() {
  // USESTATE: [nameOfState, setterFunction] = useState(initialValue);

  // use setCounter to change the "state"
  const [counter, setCounter] = useState(0); // array desctructuring

  // whaterver code is inside of "useEffect" will be run as soon as the component renders
  // - NEVER change the "useState" directly! use the setterFunction always!
  // counter is not a normal variable. it can only be changed by it's setterFunction
  useEffect(() => {
    setCounter(1);
  }, []); // add the "dependency array" as a 2nd parameter: so that the code inside "useEffect" can only happen upon the initial load of the component.


  // VARIATION 2
  // useEffect(() => {
  //   alert("counter value is: " + counter);
  // }, [counter]);

  return (
    <>
      {/* Handle events using onClick + callback function */}
      {/* prevCount: (any name) good practice prev[stateName]*/}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      {/* use the state like a normal js variable */}
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </>
  );
}

export default ReactHooks;
