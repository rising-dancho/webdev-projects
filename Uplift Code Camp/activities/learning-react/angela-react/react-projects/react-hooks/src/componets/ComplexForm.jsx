import React, { useState } from 'react';

function ComplexForm() {
  // APPROACH 1: (simpler: individual state per element)
  // const [fname, setFirstName] = useState('');
  // const [lname, setLastName] = useState('');

  // APPROACH 2: (complex: create an object that is shared by elements)
  const [fullname, setFullName] = useState({
    fName: '',
    lName: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  // ATTEMPT 1: (wrong attempt)
  // function handleFullname(event) {
  //   const newValue = event.target.value;
  //   const inputName = event.target.name;

  //   if (inputName === 'fName') {
  //     setFullName({ fName: newValue });
  //   } else if (inputName === 'lName') {
  //     setFullName({ lName: newValue });
  //   }

  //   console.log(newValue);
  //   console.log(inputName);
  // }

  // ATTEMPT 2: (correct attempt)
  function handleFullname(event) {
    // STYLE 1: (simpler)
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    // STYLE 2: (better)
    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      // STYLE 1: (simpler)
      // if (inputName === 'fName') {
      //   return {
      //     fName: newValue,
      //     lName: preValue.lName,
      //   };
      // } else if (inputName === 'lName') {
      //   return {
      //     fName: preValue.fName,
      //     lName: newValue,
      //   };
      // }

      // STYLE 2: (better)
      if (name === 'fName') {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === 'lName') {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  // APPROACH 1:
  // function handleFirstName(event) {
  //   setFirstName(event.target.value);
  // }
  // function handleLastName(event) {
  //   setLastName(event.target.value);
  // }

  return (
    <div className="container">
      <h1>
        {/* APPROACH 1: */}
        {/* Hello {fName} {lName} */}
        Hello {fullname.fName} {fullname.lName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleFullname}
          name="fName"
          placeholder="First Name"
          // APPROACH 1:
          // value={fName}
          // APPROACH 2:
          value={fullname.fName}
        />
        <input
          onChange={handleFullname}
          name="lName"
          placeholder="Last Name"
          // APPROACH 1:
          // value={lName}
          // APPROACH 2:
          value={fullname.lName}
        />
        <button className="button-variation">Submit</button>
      </form>
    </div>
  );
}

export default ComplexForm;
