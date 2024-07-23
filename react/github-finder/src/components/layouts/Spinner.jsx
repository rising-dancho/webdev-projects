import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={spinner_styling} />
    </Fragment>
  );
};

const spinner_styling = {
  display: 'block',
  width: '200px',
  margin: 'auto',
};

export default Spinner;
