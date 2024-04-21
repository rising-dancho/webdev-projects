import React from 'react';

function Card(props) {
    console.log(props)
  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </>
  );
}

export default Card;
