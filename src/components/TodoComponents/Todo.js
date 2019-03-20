import React, { Component } from 'react';


function Todo(props) {
  return (
    <div>
      <span>{props.todo.task}</span>
      <span>{props.todo.id}</span>
      <span>{props.todo.completed}</span>
    </div>
  )
}

export default Todo;