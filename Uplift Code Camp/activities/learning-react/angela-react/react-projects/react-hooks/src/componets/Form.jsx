import React, { useState } from 'react';

function HoverEffect() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState(''); // for input
  // console.log(name)
  const [heading, setHeading] = useState(''); // for onclick
  // console.log(heading)

  //   APPROACH 2:
  //   const bgDark = { 'background-color': '#000', color: '#fff' };
  //   const bgWhite = { 'background-color': '#fff', color: '#000' };

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleClick(event) {
    setHeading(name);
    console.log(event);

    event.preventDefault();
  }

  function handleInput(event) {
    setName(event.target.value);
    // handleClick(event.target.placeholder);
    // handleClick(event.target.type);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleInput}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          //   APPROACH 1:
          style={{
            backgroundColor: isMouseOver ? '#000' : '#fff',
            color: isMouseOver ? '#fff' : '#000',
          }}
          //   APPROACH 2:
          // style={isMouseOver ? bgDark : bgWhite}
          className="button-variation"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HoverEffect;
