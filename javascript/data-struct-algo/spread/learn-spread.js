let x;

// create object then assign: (style 1)
const todoNew = new Object();
todoNew.id = 1;

x = todoNew;
console.log(x);

// create object then assign: (style 2)
const todo = {};
todo.id = 1;
todo.name = 'Buy milk';
todo.completed = false;

x = todo;
console.log(x);

// create object then assign: (style 3) [nested]
const person = {
  address: {
    coords: {
      lat: 32.1342,
      long: -71.4312,
    },
  },
};

x = person.address.coords.long;
console.log(x);

// SPREAD OPERATOR:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// not combined
let obj3 = { obj1, obj2 };
obj3 = { obj1, obj2 };

x = obj3;
console.log(x);

// combined (using spread)
obj3 = { ...obj1, obj2 };

x = obj3;
// spead is used to break an object down from its original container
console.log(x, typeof x);

// DIFFERENCE between Spread vs Destructuring??
// after "spreading" an object (or array) using spread, the output is still an object (or an array)
// after "destructuring" an object, the output is now a value: (whether string, int, boolean etc.)
