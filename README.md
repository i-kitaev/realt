# Realt

[![npm version](https://badge.fury.io/js/realt.svg)](https://www.npmjs.com/package/realt)

Realt is a new way to work with [Redux](https://github.com/reactjs/redux) inspired by [Alt](https://github.com/goatslacker/alt)

If you want to skip the docs and jump straight to the code, you should check out /examples folder, there you'll find some of Redux examples migrated to realt

### Getting Started
#### Install
```
npm install --save realt
```

### Actions example
```javascript
import { createActions } from 'realt';

class TodoActions {
  constructor() {
    this.generate(
      'addTodo',
      'clearCompleted'
    );
  }

  editTodo(id, text) {
    return { id, text };
  }
}

export default createActions(TodoActions);
```

###ActionsClass.generate(…actionNames: string)
You can use this method in ActionsClass constructor, it'll setup actions which simply pass forward all incoming data

#####Note: all of the generated actions will receive only 1 parameter, so your data should be wrapped in an object

### Reducer example
```javascript
import { createReducer } from 'realt';
import TodoActions from '../actions';

class TodoReducer {
  constructor() {
    this.bindHandler(this.handleAddTodo, TodoActions.addTodo);
    this.bindHandler(this.handleDeleteTodo, TodoActions.deleteTodo);
    this.bindHandler(this.handleEditTodo, TodoActions.editTodo);
  }

  get initialState() {
    return [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ];
  }

  handleAddTodo(state, text) {
    return [
      {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text
      },
      ...state
    ];
  }

  handleDeleteTodo(state, id) {
    return state.filter(todo => todo.id !== id);
  }

  handleEditTodo(state, { id, text }) {
    return state.map(todo => todo.id === id ? { ...todo, text } : todo);
  }
}

export default createReducer(TodoReducer);
```

###ReducerClass.initialState
Here you must bring an initial snapshot of your view's state

#####Note: this property is absolutely necessary, without this one, your application won't work properly

###ReducerClass.bindHandler(reducerHandler: function, actionCreator: object)
This method is a bridge between your reducer and certain action type. 
When you call it, you're connecting the data flow from some action right into the store