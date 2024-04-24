import React from 'react';
import './card.css';

// Instruction
// Update your App.jsx and returns list of products
// Each product should include an image, a title, and price
// Use the provided list of products

// // App.jsx
// function App() {
//   return // Return your HTML-like code
// }

// export default App;

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <div className="description">
        <span>{props.name}</span>
        <p>{props.price}</p>
        {/* <input type="submit" value="Add" /> */}
      </div>
    </div>
  );
}

export default Card;
