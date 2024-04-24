// STYLE 1: importing useState
// import React from 'react';

// STYLE 2: importing useState
import React, { useState } from 'react';

function Counter() {
  // STYLE 1:
  // const state = React.useState(0);

  // STYLE 2:
  // const state = useState(123);
  // console.log(state)

  // STYLE 2: progression
  // const state = useState(0);
  // console.log(state)
  // since useState returns 2 values: whatever you pass in, the function "dispatchSetState()"
  // lets go ahead and destructure the array
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  function countDown() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className="counter">{count}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
}

export default Counter;
