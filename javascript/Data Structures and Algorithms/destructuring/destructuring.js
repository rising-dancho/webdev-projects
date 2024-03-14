const userProfile = {
  username: 'jsdev',
  email: 'jsdev@example.com',
  age: 25,
  country: 'USA',
  interests: ['web development', 'reading', 'music'],
};

// Given the code above, do the following:

// ✅ Extract the username, email, and interests properties from the userProfile object and assign them to separate variables.

const { username, email, interests } = userProfile;

const mrJones_username = username;
const mrJones_email = email;
const mrJones_interests = interests;

console.log(mrJones_username);
console.log(mrJones_email);
console.log(mrJones_interests);

// ✅ Use the extracted variables to log the user's information as an object.

const mrJones = {
  mrJones_username,
  mrJones_email,
  mrJones_interests,
};

console.log(mrJones);

// ✅ Extract the age and country properties from the userProfile object and assign them to separate variables.

const { age, country } = userProfile;

const mrJones_age = age;
const mrJones_country = country;

// ✅ Use the extracted age variable and calculate the difference between the retirement age and the user's age. Output the result as a string, for example: "Years until retirement: 40".

const retirementAge = 65;
const calculatedRetirement = retirementAge - mrJones_age;

console.log(`Years until retirement: ${calculatedRetirement}`);
