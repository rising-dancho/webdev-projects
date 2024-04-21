import React from 'react';
// STYLE 1
import { add, multiply, subtract, divide } from './functions/calculator';
// STYLE 2
// import * as Calculator from './imports/calculator';

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

function ImportExportChallenge() {
  return (
    // STYLE 1
    <ul>
      <li>1 + 2 = {add(1, 2)}</li>
      <li>2 × 3 = {multiply(2, 3)}</li>
      <li>7 - 2 = {subtract(7, 2)}</li>
      <li>5 ÷ 2 = {divide(5, 2)}</li>
    </ul>
    // STYLE 2
    //   <ul>
    //   <li>1 + 2 = {Calculator.add(1, 2)}</li>
    //   <li>2 × 3 = {Calculator.multiply(2, 3)}</li>
    //   <li>7 - 2 = {Calculator.subtract(7, 2)}</li>
    //   <li>5 ÷ 2 = {Calculator.divide(5, 2)}</li>
    // </ul>
  );
}

export default ImportExportChallenge;
