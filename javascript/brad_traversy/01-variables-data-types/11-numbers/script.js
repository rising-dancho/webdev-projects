
let string1 = "Test";
let object1 = {age: 31};
let array1 = [0,1,2,3,4,5];

let testString = Array.isArray(string1);
let testObj = Array.isArray(object1);
let testArray = Array.isArray(array1);

console.log(testString);
console.log(testObj);
console.log(testArray);


let x;
// number object declaration
const num = new Number(5);
x = num.toString();
x = num.toString().length;
x = num.toFixed(2); // rounds up; parameter 2 digits after the decimal point
x = num.toPrecision(4); //paremater (4 means 4 digists) rounds and cuts to the nearest decimal
x = num.toExponential(2); // turns digit into exponential;  parameter 2 digits after the decimal point 
x = num.toLocaleString('en-US'); // converts the number representation to local country writing
x = num.toLocaleString('en-US'); // converts the number representation to local country writing

x = Number.MAX_VALUE;
x = Number.MIN_VALUE;

console.log(x, typeof x);