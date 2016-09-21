import { createActions } from 'realt';

class TodoActions {
  constructor() {
    this.generate(
      'addTodo',
      'deleteTodo',
      'completeTodo',
      'completeAll',
      'clearCompleted'
    );
  }

  editTodo(id, text) {
    return { id, text };
  }
}

export default createActions(TodoActions);
