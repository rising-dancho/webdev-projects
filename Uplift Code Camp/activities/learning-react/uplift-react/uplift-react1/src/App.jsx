// STATE
// import { useState } from 'react';

// function App() {
//   let [counter, setCounter] = useState(0);

//   // const increment = () => {
//   //   setCounter(counter += 1);
//   //   console.log(counter);
//   // };
//   // const decrement = () => {
//   //   setCounter(counter -= 1);
//   //   console.log(counter);
//   // };

//   return (
//     <>
//       <p>Counter: {counter}</p>
//       {/* <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button> */}
//       <button onClick={() => setCounter((counter += 1))}>+</button>
//       <button onClick={() => setCounter((counter -= 1))}>-</button>
//     </>
//   );
// }

// export default App;


import React from 'react'
import LightSwitch from './component/LightSwitch';


function App() {

  return (
    <LightSwitch/>
  )
}

export default App
