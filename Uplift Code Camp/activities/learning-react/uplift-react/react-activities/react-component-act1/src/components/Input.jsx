import React from 'react';
import './input.css';

function Input(props) {
  return (
    <label>
      <span>{props.label}</span>
      <input type={props.type} placeholder={props.placeholder} />
    </label>
  );
}

export default Input;
