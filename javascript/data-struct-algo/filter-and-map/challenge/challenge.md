# Map and Filter 1

``` Javascript
const shoppingCart = [
  { name: 'T-shirt', price: 20, quantity: 2 },
  { name: 'Jeans', price: 50, quantity: 1 },
  { name: 'Sneakers', price: 80, quantity: 1 },
  { name: 'Socks', price: 5, quantity: 4 }
];
```

Use the `.map()` method to transform the shopping cart array into a new array that calculates the total cost of each item (price multiplied by quantity). The new array should contain objects with properties for the item name and its total cost.

``` Javascript
const studentGrades = [
  { studentName: 'Alice', subject: 'Math', score: 85 },
  { studentName: 'Bob', subject: 'Science', score: 92 },
  { studentName: 'Charlie', subject: 'English', score: 78 },
  { studentName: 'David', subject: 'Math', score: 90 },
  { studentName: 'Eve', subject: 'Science', score: 88 },
  { studentName: 'Frank', subject: 'English', score: 95 }
];
```

Use the `.map()` method to transform the studentGrades array and create a new array that only contains objects with the student name and their score.
Use the `.filter()` method to filter the studentGrades array and create a new array that only contains objects with grades for a specific subject.

``` Javascript
const books = [
  { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' },
  { title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-age' }
];
```

Filter the books array based on a specific genre and create a new array containing only the books that match that genre.