// Remember, we're gonna use strict mode in all scripts now!
'use strict';


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM: 1:
// We work for a company building a smart home thermometer. 
// Our most recent task is this: "Given an array of temperatures of one day, 
// calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

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

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);