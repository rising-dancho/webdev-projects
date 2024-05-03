import React from 'react';
import cars from './functions/cars.js';

function Destructuring() {
  const [honda, tesla] = cars;

  // honda
  const [hondaTopColour] = honda.coloursByPopularity;
  console.log(hondaTopColour);
  const { topSpeed: hondaTopSpeed } = honda.speedStats;
  console.log(hondaTopSpeed);

  // tesla
  const [teslaTopColour] = tesla.coloursByPopularity;
  console.log(teslaTopColour);
  const { topSpeed: teslaTopSpeed } = tesla.speedStats;
  console.log(teslaTopSpeed);

  return (
    <>
      <label className='table-title'>Cars Table</label>
      <table align="center">
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top Colour</th>
        </tr>
        <tr>
          <td>{tesla.model}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
        <tr>
          <td>{honda.model}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
      </table>
    </>
  );
}

export default Destructuring;
