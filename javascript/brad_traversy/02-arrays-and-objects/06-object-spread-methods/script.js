let x;

const todo = new Object();

todo.id = 1;
todo.task = 'Buy Milk';
todo.completed = false;

const person = {
  address: {
    coordinates: {
      lat: 42.76576,
      long: -78.89456,
    },
  },
};

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, task: 'jog' },
  { id: 2, task: 'pickup kids from school' },
  { id: 3, task: 'take out trash' },
];

x = todos[0].task;

x = Object.keys(todo); // gives the list of keys in an array

// checking length of an object
x = Object.keys(todo).length; // checks length of the "keys" of an object
x = Object.values(todo).length; // checks length of the "values" of an object
x = Object.entries(todo).length; // checks length of the "both keys and values" of an object

// getting specific component of an object
x = Object.keys(todo); // the "keys" of an object
x = Object.values(todo); // the "keys" of an object
x = Object.entries(todo); // the "keys" of an object

// checking if an object has a property
x = todo.hasOwnProperty('task'); // pass in a string to find a property or key

console.log(x);
