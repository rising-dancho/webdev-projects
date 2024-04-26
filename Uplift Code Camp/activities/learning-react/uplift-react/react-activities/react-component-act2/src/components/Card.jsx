import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt="image" />
      <div>
        <h2>{props.title}</h2>
        <div className="card-details">
          <p>${props.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

// imageUrl="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
// title="Basic Tee"
// price="35"
