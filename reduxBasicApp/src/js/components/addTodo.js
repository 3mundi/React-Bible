import React from 'react';
import { connect } from 'react-redux';

import TodoActions from '../actions/todoActions.js';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(TodoActions.addTodo(input.value));
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);
// connect to the own component with an empty container

export default AddTodo;
