import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// let counter = 0;

// function countUp() {
//   counter += 1;
//   // console.log(counter);
//   // alert('clicked');

//   // CALLING REACT DOM AGAIN ALLOWS US TO RE RENDER THE ELEMENTS
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <div className="container">
//         <h1>{counter}</h1>
//         <button onClick={countUp}>+</button>
//         <button onClick={countUp}>-</button>
//       </div>
//     </React.StrictMode>
//   );
// }
// function countDown() {
//   counter -= 1;
//   // console.log(counter);
//   // alert('clicked');

//   // CALLING REACT DOM AGAIN ALLOWS US TO RE RENDER THE ELEMENTS
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <div className="container">
//         <h1>{counter}</h1>
//         <button onClick={countUp}>+</button>
//         <button onClick={countDown}>-</button>
//       </div>
//     </React.StrictMode>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* ELEMENTS ARE ALREADY RENDERED: so we cant update {counter} variable */}
    {/* <div className="container">
      <h1>{counter}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div> */}
  </React.StrictMode>
);
