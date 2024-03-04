let x;
const arr = [34, 55, 95, 20, 15];

// add or remove behind of the array
// x = arr.push(100);
// x = arr.pop();
// add or remove infront of the array
// x = arr.unshift(99);
// x = arr.shift();
// x = arr.reverse();

// check if specific value is in the array
x = arr.includes(20); // returns -1 if value is not in the array, else returns true
x = arr.indexOf(34); // returns -1 if value is not in the array, else returns the index

// string arrays
// :: slice
x = arr.slice(-1); // returns the last entry
x = arr.slice(-2); // returns the the 2nd to the last entry + the last entry
x = arr.slice(1); // returns everything except the first element (starts with 0)
x = arr.slice(1,3); // returns starting index up until but not including the last index
// :: splice
x = arr.splice(1,3); // returns starting index up until but not including the last index AND REMOVES it from the array

x = arr.push(100,50,60,25);
x = arr.splice(2,1); // removes starting from the first index, 2nd parameter asks: how many elements to remove

// chaining
x = arr.splice(1,3).reverse().toString().charAt(0);

console.log(x);
console.log(arr);
