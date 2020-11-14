import React from 'react';
// import './App.css';


function Todo({ todo, toggleComplete, removeTodo }) {

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="container">
      <div className="item">
        <li className="item_input"
          style={{ color: 'white', textDecoration: todo.completed ? "line-through" : null }}>
          {todo.task}
        </li>
        <input className="editBtn" type="checkbox" onClick={handleCheckboxClick} />
        <button className="deleteBtn" onClick={handleRemoveClick}>Delete</button>
      </div>
    </div>

    // or we can ,  react.fragment
  );
}

export default Todo;