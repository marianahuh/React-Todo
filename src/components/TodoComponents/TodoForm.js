import React, { Component } from 'react';
import Todo from './Todo';

const TodoForm = props => {
  return (
    <form onSubmit={props.handlerChange}>
      <input
        type='text'
        onChange={props.handlerChange}
        placeholder='...todo'
        //   value: {props.value}
        name='todo'
      />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  )
}

export default TodoForm;