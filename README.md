# Realt
[![npm version](https://badge.fury.io/js/realt.svg)](https://www.npmjs.com/package/realt)

Realt is a new way to work with [Redux](https://github.com/reactjs/redux) inspired by [Alt](https://github.com/goatslacker/alt)

If you want to skip the docs and jump straight to the code, you should check out /examples folder, there you'll find some of Redux examples migrated to realt

### Getting Started
#### Install
```
npm install --save realt
```

### Actions
##### createAction(actionName: string)
##### createAction(actionName: string, payloadCreator: function)
##### createAction(actionName: string, namespace: string)
##### createAction(actionName: string, payloadCreator: function, namespace: string)
##### createActions(Actions: object|array|function)
##### createActions(Actions: object|array|function, namespace: string)

#### Examples
##### Create single action
```javascript
import { createAction } from 'realt';

const testAction = createAction('test')
```

##### Create from array
```javascript
import { createActions } from 'realt';

const actions = createActions(['create', 'delete'])
```

##### Create from object
```javascript
import { createActions } from 'realt';

const actions = createActions({
  create(id) {
    return id;
  },
  
  update(id, data) {
    return { id, data }
  }
});
```

##### Create from class
```javascript
import { createActions } from 'realt';

class Actions {
  constructor() {
    this.generate(
      'create'
    );
  }

  update(id, data) {
    return { id, data };
  }
}

const actions = createActions(Actions);
```
##### ActionsClass.generate(…actionNames: string)
You can use this method in ActionsClass constructor, it'll setup actions which simply pass forward all incoming data
##### Note: all of the generated actions will receive only 1 parameter, so your data should be wrapped in an object

### Reducer
##### createReducer(Reducer: object|function)
##### createReducer(Reducer: object|function, initialState: any)
##### createReducer(Reducer: object|function, namespace: string)
##### createReducer(Reducer: object|function, initialState: any, namespace: string)

#### Examples
##### Create from object
```javascript
import { createReducer } from 'realt';

const initialState = [{
  id: 0,
  title: 'Use Realt',
}];

const reducer = createReducer({
  create(state, id) { // or handleCreate/reducerForCreate
    
  },
  
  update(state, id) { // or handleUpdate/reducerForUpdate
    
  }
}, initialState);
```

##### Create from class
```javascript
import { createReducer } from 'realt';
import actions from '../actions';

class Reducer {
  constructor() {
    this.bindAction(actions.create, this.handleCreate);
    this.bindHandler(this.handleDelete, actions.delete);
  }

  get initialState() {
    return [{
      id: 0,
      title: 'Use Realt',
    }];
  }

  handleCreate(state, id) {
    return state.concat({ id, title: 'New entity' });
  }

  handleDelete(state, id) {
    return state.filter(entity => entity.id !== id);
  }
}

export default createReducer(Reducer);
```
##### ReducerClass.initialState
Here you must bring an initial snapshot of your view's state

##### ReducerClass.bindHandler(reducerHandler: function, actionCreator: object)
##### ReducerClass.bindAction(actionCreator: object, reducerHandler: function)
This method is a bridge between your reducer and certain action type. 
When you call it, you're connecting the data flow from some action right into the store
