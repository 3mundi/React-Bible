import { combineReducers } from 'redux';

import visibilityFilter from './visibilityFilter.js';
import todos from './todos.js';

/* reducer composition, metaprogramming structure */
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
