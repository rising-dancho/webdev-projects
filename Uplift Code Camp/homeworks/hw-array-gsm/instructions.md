## Learning Objectives

- Be comfortable working with arrays
- Meet two-dimensional arrays
- Deepen appreciation for factory functions
- Be consistent in validating inputs using conditionals

## 📃Instruction

Write a function `getGreatestSum` that returns the greatest sum of numbers given a 2D array.

**INPUT**

array of arrays: a 2D array where all the arrays are the same length

## Expected Output

Text cases or scenarios

```
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

getGreatestSum(testArray1); //should return 190 coming from column 3, 40+60+90
getGreatestSum(testArray2); //should return 180 coming from row 2, 40+50+90
getGreatestSum(testArray3); //should return "Invalid input"
getGreatestSum(testArray4); //should return "Invalid input"
```
