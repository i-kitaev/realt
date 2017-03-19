import reduceReducers from 'reduce-reducers';
import { isString, isFunction, isObject, isUndefined } from '../utils';
import createInstance from './createInstance';

/**
 * Create Redux reducer from object or class
 * @param {Object|Function} Reducer
 * @param {*|String} [initialState]
 * @param {String} [namespace]
 * @return {Function} Reducer
 */
export default function createReducer(Reducer, initialState, namespace) {
  if (isString(initialState) && isUndefined(namespace)) {
    namespace = initialState;
    initialState = undefined;
  }

  if (!(isObject(Reducer) || isFunction(Reducer))) {
    throw new Error('Expected the reducer to be object or class.');
  }

  if (!isUndefined(namespace) && !isString(namespace)) {
    throw new Error('Expected the type namespace to be a string.');
  }

  const { reducers, initialState: reducerInitialState } = createInstance(Reducer, namespace);
  const reducer = reduceReducers(...reducers);

  return (state = (reducerInitialState || initialState), action) => reducer(state, action);
}
