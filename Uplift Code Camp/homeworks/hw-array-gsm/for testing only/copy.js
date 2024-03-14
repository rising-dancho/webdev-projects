/* HELPER FUNCTIONS */
function chunkColumns(array, chunkSize) {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    // console.log(array);
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  // console.log(chunks);
  return chunks;
}

function reorganizeArrayFromColumns(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      //   console.log(array[i].length);
      //   console.log(array[j][i]);
      arr.push(array[j][i]);
      // try {
      //   arr.push(array[j][i]);
      // } catch (error) {
      //   // console.error(error);
      //   // return console.log('Invalid input');
      //   // return;
      //   throw new Error('Invalid input');
      // }
    }
  }
  // console.log(arr);
  return { array: arr, arrayLength: array.length };
}

function sumColumns(array) {
  let sumColumn = 0;
  let sumsColumnArray = [];
  let elementsInfo;
  let result = reorganizeArrayFromColumns(array);
  reorganizedArray = chunkColumns(result.array, result.arrayLength);
  //   console.log(result.array);
  //   console.log(result.arrayLength);
  // let reorganizedArray;
  // try {
  //   reorganizedArray = chunkColumns(result.array, result.arrayLength);
  //   // console.log(reorganizedArray[0]);
  //   // console.log(reorganizedArray[1]);
  //   // console.log(reorganizedArray[2]);
  //   // console.log(reorganizedArray);
  // } catch (error) {
  //   // console.error(error)
  //   // return console.log('Invalid input');
  //   throw new Error('Invalid input');
  // }

  for (let i = 0; i < reorganizedArray.length; i++) {
    sumColumn = 0; // variable repeats to zero after finishing a row
    // console.log(reorganizedArray[i]);
    elementsInfo = makeIndexes(reorganizedArray[i]);
    // console.log(elementsInfo);
    reorganizedArray[i].forEach((num) => {
      // console.log(num);
      sumColumn += num;
    });
    sumsColumnArray.push(sumColumn);
  }

  // console.log(elementsInfo);
  return { sum: sumsColumnArray, info: elementsInfo };
}

function sumRows(array) {
  let sumRow = 0;
  let sumsRowArray = [];
  let elementsInfo;
  // console.log(array, typeof array);
  for (let i = 0; i < array.length; i++) {
    sumRow = 0; // variable repeats to zero after finishing a row
    // console.log(array[i]);
    elementsInfo = makeIndexes(array[i]);
    // console.log(elementsInfo);
    array[i].forEach((num) => {
      // console.log(num);
      sumRow += num;
      // console.log(sumRow);
    });
    sumsRowArray.push(sumRow);
  }
  // console.log(sumsRowArray);
  // console.log(elementsInfo);

  return { sum: sumsRowArray, info: elementsInfo };
}

function findLargestNumber(array) {
  let max = array[0]; // setting the index 0 element sa the potential max value
  for (let i = 1; i < array.length; i++) {
    // check if the element index zero is greater than current element in the iteration; if yes: replace max
    if (array[i] > max) {
      max = array[i];
    }
  }
  // console.log(max);
  return max;
}

function makeIndexes(array) {
  // pseudo code:
  // ❌ create an array that assigns an index for each element in that given array
  // ✅ scratch that.. map/forEach has built (element, index, array)

  // WRONG WAY:
  // const result = array.map((number, index) => {
  //   rowOrColsNum = index + 1;
  //   console.log(`${rowOrColsNum} ${number}`);
  //   return { index: rowOrColsNum, element: number };
  // });

  // CORRECT WAY:
  const result = array.map((num) => num);
  // console.table(result);
  // console.log(result);
  return result;
}

// THIS HAS WRONG LOGIC:
// function isJagged(array) {
//   let result;
//   const rowLength = array[0].length;
//   for (const row of array) {
//     if (row.length !== rowLength) {
//       result = true;
//     }
//   }
//   // JAVASCRIPT BECOMES CONFUSED WITH THIS
//   result = false;
//   return result;
// }

function isJagged(array) {
  const rowLength = array[0].length;
  for (const row of array) {
    if (row.length !== rowLength) {
      return true;
    }
  }
  return false;
}

function checkIfSquare2DArray(array) {
  let numberOfCols;
  let numberOfRows = array.length;

  for (let i = 0; i < numberOfRows; i++) {
    numberOfCols = array[i].length;
  }

  if (numberOfRows === numberOfCols) {
    return true;
  }
  return false;
}


/* MAIN FUNCTION */
function getGreatestSum(array) {
  // psuedo code:
  // ✅ function takes in a 2d array
  // ✅ function finds the sum of rows and columns of the 2d array
  // ✅ figure out the greatest among all summations from rows or columns
  // ✅ figure out which is the greatest value between the highest value from row or column"
  // ✅ figure out whether the greatest value is coming from a row or a column
  // ✅ figure out from which specific column number or row number is the greatest value coming from
  // ✅ figure out how to get the values that sums up the sum.
  // ✅ function returns this : "190 coming from column 3, 40+60+90"
  // ✅ function rejects invalid 2d arrays and returns this: "Invalid input"

  // check if the incoming array is jagged array. if yes, reject:
  if (isJagged(array) === true) {
    return console.log('Invalid input');
  } else if (checkIfSquare2DArray(array) === false) {
    // check if the incoming array is a square 2D array (not rectangular array). if false, reject:
    return console.log('Invalid input');
  } else {
    let whichIsGreater = [];
    const greatestFromWhere = {};
    const greatestOfRows = findLargestNumber(sumRows(array).sum);
    const greatestOfCols = findLargestNumber(sumColumns(array).sum);

    let summation;
    let indexOfGreatest = 0;

    if (greatestOfRows > greatestOfCols) {
      greatestFromWhere.value = greatestOfRows;
      greatestFromWhere.fromWhere = 'row';
      // add greatest summation results from columns or rows into an empty array
      whichIsGreater = sumRows(array).sum;
      summation = array[indexOfGreatest + 1];
    } else {
      greatestFromWhere.value = greatestOfCols;
      greatestFromWhere.fromWhere = 'column';
      // add greatest summation results from columns or rows into an empty array
      whichIsGreater = sumColumns(array).sum;
      summation = sumColumns(array).info;
    }
    indexOfGreatest = whichIsGreater.indexOf(greatestFromWhere.value) + 1;

    return console.log(
      `${greatestFromWhere.value} coming from ${
        greatestFromWhere.fromWhere
      } ${indexOfGreatest}, ${summation.join('+')}`
    );
  }
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

const testArray3 = [
  [10, 15, 22],
  [34, 50],
  [1, 78, 9],
];

const testArray4 = [
  [10, 23, -2],
  [4, 50, 87],
];

getGreatestSum(testArray1); // ✅
getGreatestSum(testArray2); // ✅
getGreatestSum(testArray3); // ✅
getGreatestSum(testArray4); // ✅

// REFERENCES:
// 2d arrays: https://www.freecodecamp.org/news/javascript-2d-arrays/
// add each row of an array: https://sentry.io/answers/how-to-find-the-sum-of-an-array-of-numbers/#:~:text=Using%20a%20for%20loop&text=const%20arr%20%3D%20%5B23%2C%2034,to%20a%20variable%20called%20sum%20.
// sum each column of an array: https://www.youtube.com/watch?v=6A8cM947CEg
// how to chunk an array by length: https://medium.com/@drdDavi/split-a-javascript-array-into-chunks-d90c90de3a2d#:~:text=To%20split%20a%20JavaScript%20array%20into%20chunks%2C%20we%20can%20use,the%20array%20to%20be%20returned.
// sum up each row and column in a 2d array: https://stackoverflow.com/questions/38720885/find-the-sum-of-each-row-as-well-as-that-of-each-column-in-2-dimensional-matrix
// how to make a function return two values: https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
// finding the greatest number in an array: https://www.geeksforgeeks.org/program-to-find-largest-element-in-an-array/
// assigning values to an object: https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
// template literals not allowed as object keys: https://stackoverflow.com/questions/33194138/template-string-as-object-property-name
// dynamically adding an index for each item in an array: https://stackoverflow.com/questions/32610025/add-property-index-to-each-element-in-an-array
// Is it possible to add dynamically named properties to JavaScript object? https://stackoverflow.com/questions/1184123/is-it-possible-to-add-dynamically-named-properties-to-javascript-object
// map method: https://www.w3schools.com/jsref/jsref_map.asp
// getting the index inside map() function: https://stackoverflow.com/questions/38364400/index-inside-map-function
// JS map return object: https://stackoverflow.com/questions/47841899/js-map-return-object
// how to know if a value is in an array: https://www.digitalocean.com/community/tutorials/js-array-search-methods
// how to find the index of a provided value in an array: https://www.geeksforgeeks.org/how-to-find-the-array-index-with-a-value-in-javascript/
// getting only the last n elements of an array: https://bobbyhadz.com/blog/javascript-get-last-n-elements-of-array
// checking if an array is jagged or not: https://stackoverflow.com/questions/22852758/checking-to-see-if-a-2d-array-is-jagged
// try catch: uplift
// how to check number of columns in an array: https://stackoverflow.com/questions/17302300/how-to-get-the-number-of-columns-of-a-2dimension-array-in-javascript
