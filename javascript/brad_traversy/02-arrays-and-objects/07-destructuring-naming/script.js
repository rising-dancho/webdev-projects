const firstName = 'John';
const lastName = 'Doe';
const age = 31;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

// Destructuring

const todo = {
  id: 1,
  title: 'take out trash',
  user: {
    name: 'John',
  },
};

// Destructered object variable
const {
  id,
  title,
  user: { name },
} = todo;

console.log(id, title, name);
