let x;

// getting values of the Object
const todos = [
    {id:1, name: 'Buy Milk'},
    {id:2, name: 'Pickup kids from school'},
    {id:3, name: 'Take out the trash'},
];

x = todos[0];
x = todos[0].name;
console.log(x);




// ABOUT OBJECT METHODS
const todo = {};
todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

// get the keys and store directly inside an array
x = Object.keys(todo); 
console.log(x);

// get the length of an Object 
// (how many properties does object have)
x = Object.keys(todo).length; 
console.log(x);

// get an array of the key and value pairs stored inside ARRAY
x = Object.entries(todo);
console.log(x);

// return a boolean if an object has a specific "property"
x = todo.hasOwnProperty('name');
console.log(x); // true

x = todo.hasOwnProperty('age');
console.log(x); // false

