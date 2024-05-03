import React, { useState } from 'react';

function FormInput() {
  const [{ firstName, lastName, email }, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  }); //tracking values inputted in the input field
  const [headingText, setheadingText] = useState(''); // tracking on click event: when something is clicked use a different setter function to update the default text "headingText"
  const [emailText, setEmailText] = useState(''); // tracking on click event: when something is clicked use a different setter function to update the default text "headingText"

  function handleChangeInfo(e) {
    // console.log(event.target.value);

    // const { value, name } = e.target;
    // console.log(value);
    // console.log(name);

    // APPROACH 1:
    //   setPersonalDetails((prevValue) => {
    //     // console.log(prevValue)
    //     if (name === 'firstName') {
    //       return {
    //         firstName: value,
    //         lastName: prevValue.lastName,
    //         email: prevValue.email,
    //       };
    //     } else if (name === 'lastName') {
    //       return {
    //         firstName: prevValue.firstName,
    //         lastName: value,
    //         email: prevValue.email,
    //       };
    //     } else if (name === 'email') {
    //       return {
    //         firstName: prevValue.firstName,
    //         lastName: prevValue.lastName,
    //         email: value,
    //       };
    //     }
    //   });
    // }

    // APPROACH 2
    const { value, name } = e.target;

    // making a variable as the object key/name: https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1
    setPersonalDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    let fullName = `${firstName} ${lastName}`;
    setheadingText(fullName);
    setEmailText(email);
  }

  return (
    <>
      <h1>Hello {headingText}</h1>
      <p>{emailText}</p>
      <form onSubmit={handleClick}>
        <input
          name="firstName" // actual name of the input and not a key
          onChange={handleChangeInfo}
          type="text"
          placeholder="First Name"
          value={firstName}
        />
        <input
          name="lastName" // actual name of the input and not a key
          onChange={handleChangeInfo}
          type="text"
          placeholder="Last Name"
          value={lastName}
        />
        <input
          name="email" // actual name of the input and not a key
          onChange={handleChangeInfo}
          type="email"
          placeholder="Email"
          value={email}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default FormInput;

// const citrus = ['Lime', 'Lemon', 'Orange'];
// const fruits = ['Apple', 'Banana', 'Coconut', ...citrus];
// console.log(fruits);

// const personalDetails = {
//   fname: 'James',
//   lname: 'Bond',
// };

// const user = {
//   id: 1,
//   ...personalDetails,
//   username: 'jamesbond007',
// };

// console.log(user);
