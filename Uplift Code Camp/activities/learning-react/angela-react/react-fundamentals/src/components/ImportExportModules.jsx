import React from 'react';
// STYLE 1:
// ATTENTION: imported/exported function MUST be NAMED PRECISELY or else cant run that function!
import pi, { doublePi, triplePi } from './functions/math.js'; // can be named whatever

// STYLE 2: IMPORT EVERYTHING SYNTAX : returns an object
// import * as pi from './math.js';

function ImportExportModules() {
  return (
    // STYLE 1:
    <>
      <h1>Quick Maffs:</h1>
      <ul>
        <li>π = {pi}</li>
        <li>π × 2 = {doublePi()}</li>
        <li>π × 3 = {triplePi()}</li>
      </ul>

      {/* // STYLE 2: IMPORT EVERYTHING SYNTAX  */}
      {/* <ul>
        // <li>π: {pi.default}</li> // style 1 // <li>π: {pi.pi}</li> // style 2
        // <li>π x 2: {pi.doublePi()}</li>
        // <li>π x 3: {pi.triplePi()}</li>
        //{' '}
      </ul> */}
    </>
  );
}

export default ImportExportModules;
