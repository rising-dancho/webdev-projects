'use strict';

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

const calcAverage = (team,score1, score2, score3) =>{
    const average = score1 + score2 + score3 / 3;
    console.log(`${team} scored an average of ${average} points.`);
    return average;
}

console.log(calcAverage('adfinem', 90, 80,99));