'use strict';

// Your tasks:

// 1.) Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

// 2.) Create two new variables — scoreDolphins and scoreKoalas, 
// and assign the value returned from the calcAverage 
// function to them (you will need to call this function, and pass scores as arguments).

const calcAverage = (team,score1, score2, score3) =>{
    const average = score1 + score2 + score3 / 3;
    console.log(`${team} scored an average of ${average} points.`);
    return average;
}

console.log(calcAverage('adfinem', 90, 80,99));