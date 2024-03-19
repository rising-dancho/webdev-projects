let x;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// style 1 (anonymous function with return)
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

x = evenNumbers;
console.log(x);

// style 2 (arrow function)
evenNumbers = numbers.filter((number) => number % 2 === 0);

x = evenNumbers;
console.log(x);

// WHY EVEN USE FILTER? when you have forEach??
// it is more complicated if filter is not used
evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

x = evenNumbers;
console.log(x);

// WHAT IS FILTER?
// filter takes in a `condition` to be applied against each element in the inputted array
// filter is a `high order array method` for objects (or arrays). this array method returns an object (or an array);
// you can extract (element, index, array)

// Filter challenges:
const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);

x = retailCompanies;
console.log(x);

// Get companies that started 1980s and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);

x = earlyCompanies;
console.log(x);

// Get companies that lasted 10 years or more
const companiesLastedForDecade = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(companiesLastedForDecade);
