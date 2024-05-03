//CHALLENGE: Make this app work by applying what you've learnt.
// [X] 1. When new text is written into the input, its state should be saved.
// [X] 2. When the add button is pressed, the current data in the input should be
//added to an array.
//[] 3. The <ul> should display all the array items as <li>s

import { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [currentData, setCurrentData] = useState('');
  const [listItems, setListItems] = useState([]);

  function onChangeHandler(e) {
    // console.log(e.target.value);
    let newValue = e.target.value;
    setCurrentData(newValue);
  }

  function clickHandler() {
    setListItems((prevItems) => {
      return [...prevItems, currentData];
    });
    setCurrentData('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onChangeHandler} type="text" value={currentData} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem, index) => (
            <TodoItem key={index} listItem={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
