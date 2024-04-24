import React from 'react';

function Form() {
  return (
    <form>
      <label>
        <span>First Name:</span>
        <input name="firstName" type="text" placeholder="First name" />
      </label>
      <label>
        <span>Last Name:</span>
        <input name=";astName" type="text" placeholder="Last name" />{' '}
      </label>
      <label>
        <span>Email: </span>
        <input name="emai" type="text" placeholder="Email" />{' '}
      </label>
      <label>
        <span>Password: </span>
        <input name="password" type="text" placeholder="Password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
