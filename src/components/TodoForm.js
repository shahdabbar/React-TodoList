import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
// import './App.css';
const uuid = require('uuid').v4;

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });

      // reset task input
      setTodo({ ...todo, task: '' });
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_div">
        <input className="input" placeholder="What do you want to do..." name="task" type="text" value={todo.task} onChange={handleTaskInputChange} />
        <button className="addBtn" type="submit">Add</button>
      </div>
    </form>
  )

}

export default TodoForm;