// create an array of 10 numbers instead of typing
// let numbers = [];
// for (let i = 1; i <= 10; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// long way
// let even = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// shorter version
// even = numbers.filter((number) => number % 2 === 0);
// console.log(even);

// same with forEach
// const evenNum = [];

// numbers.forEach((number) => {
//     if(number % 2 === 0) {
//         // console.log(number);
//         evenNum.push(number);
//     }
// });

// console.log(evenNum);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Tech', start: 1991, end: 2001 },
  { name: 'Company Three', category: 'Retail', start: 1961, end: 2002 },
  { name: 'Company Four', category: 'Auto', start: 1971, end: 2010 },
  { name: 'Company Five', category: 'Agriculture', start: 1961, end: 1965 },
  { name: 'Company Seven', category: 'Retail', start: 2001, end: 2008 },
];

// get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category == 'Retail'
);
console.log(retailCompanies);

// get companies that started in or after 1980 and ended in or before 2005
// const companyEra = companies.filter(
//   (company) => company.start >= 1980 && company.end <= 2005
// );
// console.log(companyEra);

// get companies that lasted 10 years of more
// const centuryCompanies = companies.filter(
//   (company) => company.end - company.start > 10
// );

// console.log(centuryCompanies);
