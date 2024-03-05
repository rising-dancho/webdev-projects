let x;

const person = {
  name: 'John Doe',
  age: 31,
  isAdmin: true,
  address: {
    street: '123 Main St.',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
  'first name': 'Jose',
  'last name': 'Perez',
};

x = person.name;
x = person['age'];
x = person.address.state;
x = person.hobbies[0];
x = person.name = 'Jane Doe';
x = person.isAdmin = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
    return console.log(`Hello, my name is ${this.name}`);
};

person.greet();

x = person['first name'];
y = person['last name'];
console.log(x + " " + y);