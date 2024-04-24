import React, { useState } from 'react';

//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

// setInterval(updateTime, 1000);
// const [update, setUpdate] = useState(time);

function GetTime() {
  let time = new Date().toLocaleTimeString();
  //   console.log(time);
  const [state, setState] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }
  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1 className="time">{state}</h1>
      <button onClick={updateTime} className="button-variation">
        Get Time
      </button>
    </div>
  );
}

export default GetTime;
