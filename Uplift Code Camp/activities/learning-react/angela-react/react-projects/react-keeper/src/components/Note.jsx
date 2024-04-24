import React from 'react';
import Card from './mini-components/Card';
import notes from './functions/notes';

function Note() {
  // return keyword IS REQUIRED in .map IF you enclosed in curly braces
  // otherwise if only 1 line of code remove "curly" and remove "return" and remove the ending ";"
  return notes.map((note, index) => (
    <Card key={index} title={note.title} content={note.content} />
  ));
}

export default Note;
