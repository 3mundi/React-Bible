import React from 'react';

import AddTodo from '../components/addTodo.js';
import VisibleTodoList from '../components/visibleTodoList.js';
import Footer from '../components/footer.js';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;
