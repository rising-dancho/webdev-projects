import React from 'react';
import { useTodoModel } from '../models/todoModel';
import TodoList from '../views/TodoList';
import AddTodo from '../views/AddTodo';

const TodoController = () => {
  const { todos, addTodo, removeTodo } = useTodoModel();

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default TodoController;
