/* HELPER FUNCTIONS */
function chunkColumns(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}

function reorganizeArrayFromColumns(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      //   console.log(array[i].length);
      //   console.log(array[j][i]);
      arr.push(array[j][i]);
    }
  }
  // console.log(arr);
  return { array: arr, arrayLength: array.length };
}

function sumColumns(array) {
  // sums of columns
  //   var colSum = array.reduce((a, b) => a.map((x, i) => x + b[i]));
  //   console.log(colSum);
  //   return colSum;
  let result = reorganizeArrayFromColumns(array);
  //   console.log(result.array);
  //   console.log(result.arrayLength);
  let reorganizedArray = chunkColumns(result.array, result.arrayLength);
  //   console.table(reorganizedArray);
  //   console.log(sumRows(reorganizedArray), typeof sumRows(reorganizedArray));
  return sumRows(reorganizedArray);
}

function sumRows(array) {
  let sumRow = 0;
  let resultsArray = [];
  let indexArray = [];
  let counter = 1;

  for (let i = 0; i < array.length; i++) {
    sumRow = 0; // variable repeats to zero after finishing a row
    // console.log(array.length, array[i]);
    array[i].forEach((num) => {
      sumRow += num;
    });
    indexArray.push(counter++);
    resultsArray.push(sumRow);
  }
  console.table(resultsArray);
  return { sums: resultsArray, indexes: indexArray };
}

function findLargestNumber(array) {
  let max = array[0]; // setting the index 0 element sa the potential max value
  for (let i = 1; i < array.length; i++) {
    // check if the element index zero is greater than current element in the iteration; if yes: replace max
    if (array[i] > max) {
      max = array[i];
    }
  }
  //   console.log(max);
  return max;
}

/* MAIN FUNCTION */
function getGreatestSum(array) {
  // psuedo code:
  // ✅ function takes in a 2d array
  // ✅ function finds the sum of rows and columns of the 2d array
  // ✅ figure out the greatest among all summations from rows or columns
  // ✅ figure out which is the greatest value between the highest value from row or column"
  // ✅ figure out whether the greatest value is coming from a row or a column
  // ❌ figure out from which specific column number or row number is the greatest value coming from
  // ❌ function returns this : "190 coming from column 3, 40+60+90"
  // ❌ function rejects invalid 2d arrays and returns this: "Invalid input"
  const whichIsGreater = [];
  const greatestFromWhere = {};
  const greatestOfRows = findLargestNumber(sumRows(array).sums);
  const greatestOfCols = findLargestNumber(sumColumns(array).sums);
  console.log(greatestOfRows);
  console.log(greatestOfCols);

  if (greatestOfRows > greatestOfCols) {
    greatestFromWhere.value = greatestOfRows;
    greatestFromWhere.fromWhere = 'row';
  } else {
    greatestFromWhere.value = greatestOfCols;
    greatestFromWhere.fromWhere = 'column';
  }
  //   console.log(greatestFromWhere);

  // add greatest summation results from columns and rows into an empty array
  whichIsGreater.push(findLargestNumber(sumRows(array)));
  whichIsGreater.push(findLargestNumber(sumColumns(array)));

  return console.log(
    `${greatestFromWhere.value} coming from ${greatestFromWhere.fromWhere} 3, 40+60+90`
  );
  return console.log(
    `${greatestFromWhere.value} coming from column 3, 40+60+90`
  );
}

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

// const testArray3 = [
//     [10, 15, 22],
//     [34, 50],
//     [1, 78, 9],
// ];

// const testArray4 = [
//     [10, 23, -2],
//     [4, 50, 87],
// ];

getGreatestSum(testArray1);
// getGreatestSum(testArray2);

// REFERENCES:
// 2d arrays: https://www.freecodecamp.org/news/javascript-2d-arrays/
// add each row of an array: https://sentry.io/answers/how-to-find-the-sum-of-an-array-of-numbers/#:~:text=Using%20a%20for%20loop&text=const%20arr%20%3D%20%5B23%2C%2034,to%20a%20variable%20called%20sum%20.
// sum each column of an array: https://www.youtube.com/watch?v=6A8cM947CEg
// how to chunk an array by length: https://medium.com/@drdDavi/split-a-javascript-array-into-chunks-d90c90de3a2d#:~:text=To%20split%20a%20JavaScript%20array%20into%20chunks%2C%20we%20can%20use,the%20array%20to%20be%20returned.
// sum up each row and column in a 2d array: https://stackoverflow.com/questions/38720885/find-the-sum-of-each-row-as-well-as-that-of-each-column-in-2-dimensional-matrix
// how to make a function return two values: https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
// finding the greatest number in an array: https://www.geeksforgeeks.org/program-to-find-largest-element-in-an-array/
// assigning values to an object: https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
// checking if an array is 2d or not: https://www.edureka.co/community/29769/how-to-check-if-array-is-multidimensional-or-not

