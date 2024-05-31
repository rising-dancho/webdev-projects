// src/views/AddTodo.js

import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    onAddTodo(input);
    setInput(''); // Clear input field
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
