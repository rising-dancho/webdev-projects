let x;

// Array Literal
const numbers = [12, 45, 10, 29, 39];
const mixed = [12, true, "wew", 29, null];

// Array Constructor
 const fruit = new Array("hotdog", "bitlog", "canton");

 x = numbers[0] + fruit[0];
 x = numbers[0] + numbers[2];
 
 x = `My favorite food is ${fruit[2]}`;
 x = numbers.length;
 
 x = fruit[fruit.length] = 'pear';
 
console.log(x, fruit);
