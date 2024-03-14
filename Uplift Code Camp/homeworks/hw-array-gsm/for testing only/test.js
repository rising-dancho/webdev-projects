/* CHUNKING ARRAYS */
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;
// const chunks = [];

// for (let i = 0; i < arr.length; i += chunkSize) {
//   const chunk = arr.slice(i, i + chunkSize);
//   chunks.push(chunk);
// }

// console.log(chunks);
// how to chunk an array by length: https://medium.com/@drdDavi/split-a-javascript-array-into-chunks-d90c90de3a2d#:~:text=To%20split%20a%20JavaScript%20array%20into%20chunks%2C%20we%20can%20use,the%20array%20to%20be%20returned.

/* SUM OF ROWS AND COLS */
// var matrix = [
//   [1, 2, 3],
//   [7, 2, 6],
// ];

// // sums of rows
// var rowSum = matrix.map((r) => r.reduce((a, b) => a + b));

// // sums of columns
// var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

// console.log(rowSum);
// console.log(colSum);
// sum up each row and column in a 2d array: https://stackoverflow.com/questions/38720885/find-the-sum-of-each-row-as-well-as-that-of-each-column-in-2-dimensional-matrix

/* FINDING LARGEST */
// function largest(arr) {
//   let i;

//   // Initialize maximum element
//   let max = arr[0];

//   // Traverse array elements
//   // from second and compare
//   // every element with current max
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }

//   return max;
// }

// // Driver code
// let arr = [10, 324, 45, 90, 9808];
// console.log('Largest in given array is ' + largest(arr));
// finding the greatest number in an array: https://www.geeksforgeeks.org/program-to-find-largest-element-in-an-array/

// let arr = [10, 20, 40, 40, 50, 60, 70, -80, 90];
// let summationInfo = {};

// let objName = "";
// for (var i = 1; i < arr.length; i++) {
//   // console.log(arr[i]);
//   objName = `row_number${i}`;
//   // console.log(objName);
//   summationInfo.[`row_number${i}`] = arr[i];
// }
// console.log(summationInfo);

// dynamically adding an index for each item in an array: https://stackoverflow.com/questions/32610025/add-property-index-to-each-element-in-an-array

// const b = 'B';
// const c = 'C';

// const data = {
//     a: true,
//     [b]: true, // dynamic property
//     [`interpolated-${c}`]: true, // dynamic property + interpolation
//     [`${b}-${c}`]: true
// }

// console.log(data);

// Is it possible to add dynamically named properties to JavaScript object? https://stackoverflow.com/questions/1184123/is-it-possible-to-add-dynamically-named-properties-to-javascript-object

// const numbers = [10, 20, 40, 40, 50, 60, 70, -80, 90];

// const newArr = numbers.map(myFunction);

// function myFunction ( number, index) {
//   // console.log(`${index + 1} ${number}`);
//   return {element: number, elementPosition: index};
// }

// console.log(newArr.element);

// map method: https://www.w3schools.com/jsref/jsref_map.asp

// const map = numbers.map((x, index, arr) => {
//   // console.log(index);
//   return [index +1, x];
// });

// console.log(map);

// getting the index inside map() function: https://stackoverflow.com/questions/38364400/index-inside-map-function

// const rockets = [
//   { country:'Russia', launches:32 },
//   { country:'US', launches:23 },
//   { country:'China', launches:16 },
//   { country:'Europe(ESA)', launches:7 },
//   { country:'India', launches:4 },
//   { country:'Japan', launches:3 }
// ];

// const launchOptimistic = numbers.map((elem, index) => ({
//   element: elem,
//   elementPosition: index + 1,
// }));

// console.log(launchOptimistic);

// // JS map return object: https://stackoverflow.com/questions/47841899/js-map-return-object

// const alligatorFacts = ['thick scales', 80, '4 foot tail', 'rounded snout', 80];

// const result = alligatorFacts.includes('thick scales');
// console.log(result);

// how to know if a value is in an array: https://www.digitalocean.com/community/tutorials/js-array-search-methods

// const numbers = [10, 20, 40, 40, 50, 60, 70, -80, 90];

function isJagged(arr) {
  const rowLength = arr[0].length;
  for (const row of arr) {
    if (row.length !== rowLength) {
      return true;
    }
  }
  return false;
}

// function isSquare(arr) {
//   const length = arr.length;
//   for (const row of arr) {
//     if (row.length !== length) {
//       return false;
//     }
//   }
//   return true;
// }

// // Test cases
const testArray1 = [
  [10, 20, 40],
  [40, 50, 60],
  [70, -80, 90],
];

const testArray2 = [
  [10, 20, 40],
  [40, 50, 90],
  [70, 80, 10],
];

const testArray3 = [
  [10, 15, 22],
  [34, 50],
  [1, 78, 9],
];

const testArray4 = [
  [10, 23, -2],
  [4, 50, 87],
];

console.log(isJagged(testArray1)); // false
console.log(isJagged(testArray2)); // false
console.log(isJagged(testArray3)); // true
console.log(isJagged(testArray4)); // false

// console.log(isSquare(arr2));
// checking if an array is jagged or not: https://stackoverflow.com/questions/22852758/checking-to-see-if-a-2d-array-is-jagged
// conversion: https://chat.openai.com/c/c704da09-8535-4761-853a-656172df4d94

// const numbers = [
//   [10, 23, -2],
//   [4, 50, 87],
// ];

// var numberOfRows = numbers.length;
// if (numbers.length) {
//   console.log(numbers.length);
// }
// for (var i = 0; i < numberOfRows; i++) console.log(numbers[i].length);

// let x = [
//   [2,3,4],
//   [1,1,1]
// ];

// console.log(x.length)  // row count
// console.log(x[0].length) // column count

// function checkIfSquare2DArray(array) {
//   let result;
//   let numberOfCols;
//   let numberOfRows = array.length;
//   // console.log(numberOfRows);

//   for (let i = 0; i < numberOfRows; i++) {
//     numberOfCols = array[i].length;
//   }
//   // console.log(numberOfCols);

//   if (numberOfRows !== numberOfCols) {
//     result = 'Invalid Input';
//     console.log(result);
//   } else {
//     result = array;
//     console.log(result);
//   }
//   return result;
// }

// const testArray2 = [
//   [10, 20, 40],
//   [40, 50, 90],
//   [70, 80, 10],
// ];

// const testArray4 = [
//   [10, 23, -2],
//   [4, 50, 87],
// ];

// checkIfSquare2DArray(testArray2);
// checkIfSquare2DArray(testArray4);

// how to check number of columns in an array: https://stackoverflow.com/questions/17302300/how-to-get-the-number-of-columns-of-a-2dimension-array-in-javascript
