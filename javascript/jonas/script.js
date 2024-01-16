// Remember, we're gonna use strict mode in all scripts now!
'use strict';


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM:
// We work for a company building a smart home thermometer. 
// Our most recent task is this: "Given an array of temperatures of one day, 
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// What is amplitude? 
// - The temperature amplitude is the difference between 
// the minimum and maximum temperature that occurred within 
// a specific recording time period (e.g. last 24h).
// - How to get the minimum/maximum temp in javascript?
// - Whats the error?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it


const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calcAmplitude(temp) {

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];
    
    if(typeof currentTemp !== 'number') continue;
    if (currentTemp > max) {
      max = currentTemp;
    } else if (currentTemp < min) {
      min = currentTemp
    }
  }       
  const amplitude = max - min; 
  return `max: ${max}; min: ${min}; amplitude: ${amplitude}`;
}

console.log(calcAmplitude(temperatures));


// // For regular arrays:
// var max = Math.max(arrayOfNumbers);

// // For arrays with tens of thousands of items:
// let max = testArray[0];
// for (let i = 1; i < testArrayLength; ++i) {
//   if (testArray[i] > max) {
//     max = testArray[i];
//   }
// }