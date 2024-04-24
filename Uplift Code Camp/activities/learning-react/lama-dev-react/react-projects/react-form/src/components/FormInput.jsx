import React from 'react';
import './formInput.css';

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label>{props.name}</label> */}
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default FormInput;
