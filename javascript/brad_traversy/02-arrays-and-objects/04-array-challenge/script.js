// ### Challenge 1:
let x;
const arr = [1, 2, 3, 4, 5];

x = arr.reverse();
arr.unshift(6);
arr.push(0);
console.log(x);

// ### Challenge 2:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9, 10];
arr1.pop();
let arr3 = [...arr1, ...arr2];
console.log(arr3);
