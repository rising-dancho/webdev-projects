//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from 'react';

const name = 'adfinem';

// Getting current year:
let currentYear = new Date().getFullYear();

function JSXChallenge() {
  return (
    <>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </>
  );
}

export default JSXChallenge;