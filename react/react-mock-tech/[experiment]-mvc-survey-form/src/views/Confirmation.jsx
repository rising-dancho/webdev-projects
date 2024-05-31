import React from 'react';

function Confirmation({ onReset }) {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Your form has been successfully submitted!</p>
      <button onClick={onReset}>Reset Form</button>
    </div>
  );
}

export default Confirmation;
