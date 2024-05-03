import React from 'react';
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  function onClickHandler(e) {
    e.preventDefault();
    // alert("TODO");
    setTodos((prevValue) => {
      return [...prevValue, text];
    });
    setText(''); // reset the "setText" useState to empty the input field by supplying "" (empty string). since setText is binded to the inputfield.
  }

  function onChangeHandler(e) {
    // console.log(e.target.value);
    let newEntry = e.target.value;
    setText(newEntry);
  }

  function handleDelete(index) {
    //  explanation: splice(index, howMany)
    // **howMany: how many array elements do you want to remove?
    const arr = [...todos];
    arr.splice(index, 1);
    setTodos(arr);
  }

  return (
    <>
      <form action="">
        <input onChange={onChangeHandler} type="text" value={text} />
        <button onClick={onClickHandler}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
