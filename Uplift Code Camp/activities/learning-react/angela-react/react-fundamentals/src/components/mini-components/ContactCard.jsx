import React from 'react';
import Avatar from './Avatar';
import Detail from './Detail';

function ContactCard(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="top">
        <span className="id">{props.id}</span>
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.number} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default ContactCard;
