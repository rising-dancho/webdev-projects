import React, { useState } from 'react';

// TODO:
// [X] conditional rendering
// [X] ternary operator
// [X] event handling
// [X] inline styling (line-through)

// psuedo code:
// - if <li> is clicked ? apply line-through : remove line-through
//  css: text-decoration: line-through;
// - how to check if an <li> is clicked?
// : adding onClick on an element automatically executes your supplied function upon click.
// - how to use useState here?
// : we can use useState as a toggler
// - how to apply styling on button click?

// realization: if you are not going to apply (or removing) a "style" to an element you can put in a "null" instead, but NOT "" or else it will throw an error.

function TodoItem(props) {
  // let isChecked = false; // you can use useState instead of this
  const [isChecked, setIsChecked] = useState(false);

  const lineThrough = {
    textDecoration: 'line-through',
  };

  function toggleHandler() {
    // alert("clicked");
    // i am only changing the useState between true or false.. the style is already being applied depending if "isChecked" is true or false. the code in question for styling is: isChecked ? lineThrough : null
    setIsChecked(isChecked ? false : true);
  }

  // BETTER WAY:
  // function toggleHandler() {
  //   setIsChecked((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <li
      style={isChecked ? lineThrough : null}
      onClick={toggleHandler}
      key={props.index}
    >
      {props.listItem}
    </li>
  );
}

export default TodoItem;
