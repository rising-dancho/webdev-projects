// step 1
const library = [
  {
    title: 'Mindset',
    author: 'Carrol S. Dweck',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kyosaki',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Start With No',
    author: 'Jim Camp',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// step 2
// set all the books are read
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// step 3
const { title:firstBook } = library[0];

console.log(firstBook);

// step 4
const str = JSON.stringify(library);
console.log(str);
