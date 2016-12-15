import { createReducer } from 'realt';
// import TodoActions from '../actions';

// class TodoReducer {
//   constructor() {
//     this.bindHandler(this.handleAddTodo, TodoActions.addTodo);
//     this.bindHandler(this.handleDeleteTodo, TodoActions.deleteTodo);
//     this.bindHandler(this.handleCompleteTodo, TodoActions.completeTodo);
//     this.bindHandler(this.handleCompleteAll, TodoActions.completeAll);
//     this.bindHandler(this.handleClearCompleted, TodoActions.clearCompleted);
//     this.bindHandler(this.handleEditTodo, TodoActions.editTodo);
//   }
//
//   get initialState() {
//     return [
//       {
//         text: 'Use Redux',
//         completed: false,
//         id: 0
//       }
//     ];
//   }
//
//   handleAddTodo(state, text) {
//     return [
//       {
//         id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
//         completed: false,
//         text: text
//       },
//       ...state
//     ];
//   }
//
//   handleDeleteTodo(state, id) {
//     return state.filter(todo => todo.id !== id);
//   }
//
//   handleEditTodo(state, { id, text }) {
//     return state.map(todo => todo.id === id ? { ...todo, text } : todo);
//   }
//
//   handleCompleteTodo(state, id) {
//     return state.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     )
//   }
//
//   handleCompleteAll(state) {
//     const areAllMarked = state.every(todo => todo.completed);
//     return state.map(todo => ({
//       ...todo,
//       completed: !areAllMarked
//     }))
//   }
//
//   handleClearCompleted(state) {
//     return state.filter(todo => todo.completed === false);
//   }
// }

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
}, [{
  text: 'Use Redux',
  completed: false,
  id: 0
}]);