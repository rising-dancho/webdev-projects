let x;

const name = 'Jose';
const age = 31;

// concatenation
// x = 'Hello, my name is ' +  name + ' and I am ' + age + ' years old';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = 'Hello World';

x = s.length;

// access individual letters by position
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);

x = s.indexOf('e');
x = s.substring(1, 5);
x = s.slice(-10);

x = s.replace('Hell', 'Heaven');

console.log(x);


