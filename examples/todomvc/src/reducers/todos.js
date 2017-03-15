import { createReducer } from 'realt';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default createReducer({
  handleAddTodo(state, text) {
    return [
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text
      },
      ...state
    ];
  },

  handleDeleteTodo(state, id) {
    return state.filter(todo => todo.id !== id);
  },

  handleEditTodo(state, { id, text }) {
    return state.map(todo => todo.id === id ? { ...todo, text } : todo);
  },

  handleCompleteTodo(state, id) {
    return state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  },

  handleCompleteAll(state) {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }))
  },

  handleClearCompleted(state) {
    return state.filter(todo => todo.completed === false);
  }
}, initialState, 'TODO');