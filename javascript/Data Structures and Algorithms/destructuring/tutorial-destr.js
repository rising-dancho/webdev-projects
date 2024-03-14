const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

const todo = {
  id: 1,
  title: 'Take out trash',
};

const { id, title } = todo;
//  you desctructure to get the actual value from an object
console.log(id);
