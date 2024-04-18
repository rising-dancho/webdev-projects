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
// how to chunk an array by length: https://medium.com/@drdDavi/split-a-javascript-array-into-chunks-d90c90de3a2d#:~:text=To%20split%20a%20JavaScript%20array%20into%20chunks%2C%20we%20can%20use,the%20array%20to%20be%20returned.

/* FINDING LARGEST */
function largest(arr) {
  let i;

  // Initialize maximum element
  let max = arr[0];

  // Traverse array elements
  // from second and compare
  // every element with current max
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// Driver code
let arr = [10, 324, 45, 90, 9808];
console.log('Largest in given array is ' + largest(arr));
// finding the greatest number in an array: https://www.geeksforgeeks.org/program-to-find-largest-element-in-an-array/
