import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import todoApp from './reducers/composition.js';

import TodoApp from './containers/todoApp.js';

// passing the store by context implicity using react-redux project bindings PROVIDER, passing the store down the context
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
