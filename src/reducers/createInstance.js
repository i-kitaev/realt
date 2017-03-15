import { isFunction, toConstant } from '../utils';
import makeActionHandler from './makeActionHandler';

function createInstanceByClass(ReducerClass) {
  const reducers = [];

  /* eslint-disable no-param-reassign */

  /**
   * Attaches reducer's handler function to specific action type
   * @param {Function} reducerHandler
   * @param {Object} actionCreator
   */
  ReducerClass.prototype.bindHandler = function bindHandler(reducerHandler, actionCreator) {
    reducers.push(
      makeActionHandler(reducerHandler, null, actionCreator.toString(), this.initialState)
    );
  };

  /**
   * Binds actionCreator for specific reducer handler function
   * @param {Object} actionCreator
   * @param {Function} reducerHandler
   */
  ReducerClass.prototype.bindAction = function bindAction(actionCreator, reducerHandler) {
    this.bindHandler(reducerHandler, actionCreator);
  };

  /* eslint-enable no-param-reassign */

  const reducer = new ReducerClass();

  return { reducers, initialState: reducer.initialState };
}

function createInstanceByObject(reducerObject, typePrefix) {
  const reducers = [];
  const prefixes = ['handle', 'reducerFor'];
  const initialState = reducerObject.initialState;

  let actionType = null;
  let reducerHandler = null;

  Object.keys(reducerObject).forEach((reducer) => {
    actionType = reducer;
    prefixes.forEach((prefix) => {
      if (reducer.includes(prefix)) actionType = reducer.replace(prefix, '');
    });

    actionType = toConstant(actionType);
    reducerHandler = reducerObject[reducer];

    reducers.push(makeActionHandler(reducerHandler, typePrefix, actionType, initialState));
  });

  return { reducers, initialState };
}

export default function createInstance(Reducer, typePrefix) {
  if (isFunction(Reducer)) return createInstanceByClass(Reducer);

  return createInstanceByObject(Reducer, typePrefix);
}
