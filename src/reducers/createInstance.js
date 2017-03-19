import { isObject, isFunction, getActionType } from '../utils';
import makeActionHandler from './makeActionHandler';

function createInstanceFromObject(reducer, namespace) {
  const reducers = [];
  const initialState = reducer.initialState;

  let actionType = null;
  let reducerHandler = null;

  Object.keys(reducer).forEach((reducerName) => {
    actionType = getActionType(reducerName, namespace);
    reducerHandler = reducer[reducerName];

    reducers.push(
      makeActionHandler(actionType, reducerHandler, initialState)
    );
  });

  return { reducers, initialState };
}

function createInstanceFromClass(ReducerClass) {
  const reducers = [];

  /**
   * Attaches reducer's handler function to specific action type
   * @param {Function} reducerHandler
   * @param {Object} actionCreator
   */
  ReducerClass.prototype.bindHandler = function bindHandler(reducerHandler, actionCreator) {
    reducers.push(
      makeActionHandler(actionCreator.toString(), reducerHandler, this.initialState)
    );
  };

  /**
   * Binds actionCreator to specific reducer handler function
   * @param {Object} actionCreator
   * @param {Function} reducerHandler
   */
  ReducerClass.prototype.bindAction = function bindAction(actionCreator, reducerHandler) {
    this.bindHandler(reducerHandler, actionCreator);
  };

  const reducer = new ReducerClass();

  return { reducers, initialState: reducer.initialState };
}

export default function createInstance(Reducer, namespace) {
  let reducer = { reducers: [] };

  if (isObject(Reducer)) {
    reducer = createInstanceFromObject(Reducer, namespace);
  } else if (isFunction(Reducer)) {
    reducer = createInstanceFromClass(Reducer);
  }

  return reducer;
}
