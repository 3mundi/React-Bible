
let nextTodoId = 0;

// Action Creators
// A set of functions that returns specific object functionality
const TodoActions = {
  addTodo: (text) => {
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    };
  },
  toggleTodo: (id) => {
    return {
      type: 'TOGGLE_TODO',
      id
    };
  },
  setVisibilityFilter: (filter) => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    };
  },
};
// Action Creators

export default TodoActions;
