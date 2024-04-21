import React from 'react';
import Entry from './Entry';
import emojipedia from './functions/emojipedia';

function Emojipedia() {
  // add entry jsx element function
  function addEntry(contact, index) {
    return (
      <Entry
        key={index}
        id={contact.id}
        emoji={contact.emoji}
        name={contact.name}
        meaning={contact.meaning}
      />
    );
  }

  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {console.log(emojipedia)}
        {emojipedia.map(addEntry)}
      </dl>
    </>
  );
}

export default Emojipedia;
