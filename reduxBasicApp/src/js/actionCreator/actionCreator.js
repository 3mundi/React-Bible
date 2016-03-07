
let nextTodoId = 0;

// Action Creators
const Creator = {
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

export default Creator;
