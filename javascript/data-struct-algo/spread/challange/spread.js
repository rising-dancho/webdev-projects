const initialArray = [1, 2, 3, 4, 5];
const initialObject = { name: 'John', age: 25, country: 'USA' };

// ✅ Use the spread operator to create a new array called modifiedArray that includes all the elements from the initialArray along with an additional element, 6.
const modifiedArray = [...initialArray, 6];

console.log(modifiedArray);

// ✅ Use the spread operator to create a new object called modifiedObject that includes all the key-value pairs from the initialObject along with a new property interests containing an array of interests, such as ['programming', 'music'].
const modifiedObject = { ...initialObject };
modifiedObject.interests = ['programming', 'music'];

console.log(modifiedObject);

// ✅ Use the spread operator to create a new array called combinedArray that combines the elements from the initialArray and a second array, additionalArray = [6, 7, 8].

const additionalArray = [6, 7, 8];
const combinedArray = [...initialArray, ...additionalArray];

console.log(combinedArray);

// ✅ Use the spread operator to create a new object called mergedObject by merging the properties from the initialObject and a second object, additionalObject = { occupation: 'developer' }.

const additionalObject = { occupation: 'developer' };
const mergedObject = { ...initialObject, ...additionalObject };

console.log(mergedObject);