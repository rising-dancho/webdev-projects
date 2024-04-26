import React, { useState } from 'react';

function App() {
  // let counter = 0; // cant update because component only rendered once. need useState to rerender component

  let [counter, setCounter] = useState(0);

  // APPROACH 1
  // function increment() {
  //   setCounter((counter + 1)); // WARNING: "+=" is not allowed to reassign! we use setter to do that
  //   console.log(counter);
  // }
  // function decrement() {
  //   setCounter((counter - 1));
  //   console.log(counter);
  // }

  return (
    <>
      <p>Counter: {counter}</p>
      {/* APPROACH 1 */}
      {/* <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}
      {/* APPROACH 2 */}
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
