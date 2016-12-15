import isFunction from 'lodash/isFunction';
import toConstant from '../utils/toConstant';
import makeActionHandler from './makeActionHandler';

function createInstanceByClass(ReducerClass) {
  const reducers = [];

  class ReducerGenerator extends ReducerClass {
    /**
     * Attaches reducer's handler function to specific action type
     * @param {function} reducerHandler
     * @param {object} actionCreator
     */
    bindHandler(reducerHandler, actionCreator) {
      reducers.push(makeActionHandler(reducerHandler, actionCreator, this.defaultState));
    }
  }

  const reducer = new ReducerGenerator();

  return { reducers, defaultState: reducer.initialState };
}

function createInstanceByObject(reducerObject) {
  const reducers = [];
  const prefixes = ['handle', 'reducerFor'];
  const defaultState = reducerObject.defaultState;
  let actionType = null;
  let reducerHandler = null;

  Object.keys(reducerObject).forEach((reducer) => {
    actionType = reducer;
    prefixes.forEach((prefix) => {
      if (reducer.includes(prefix)) actionType = reducer.replace(prefix, '');
    });

    actionType = toConstant(actionType);
    reducerHandler = reducerObject[reducer];

    reducers.push(makeActionHandler(reducerHandler, actionType, defaultState));
  });

  return { reducers, defaultState: reducerObject.initialState };
}

export default function createInstance(Reducer) {
  if (isFunction(Reducer)) return createInstanceByClass(Reducer);

  return createInstanceByObject(Reducer);
};
