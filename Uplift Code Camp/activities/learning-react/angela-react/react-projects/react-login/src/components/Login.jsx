import React from 'react';
import Input from './Input';

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.userIsRegistered === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {/* APPROACH 1 */}
        {/* {!props.userIsRegistered ? 'Register' : 'Login'} */}
        {/* APPROACH 2 */}
        {props.userIsRegistered === false ? 'Register' : 'Login'}
      </button>
    </form>
  );
}

export default Login;
