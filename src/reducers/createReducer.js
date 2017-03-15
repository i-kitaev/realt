import reduceReducers from 'reduce-reducers';
import { isString } from '../utils';
import createInstance from './createInstance';

/**
 * Create Redux reducer from Class
 * @param {Function|Object} Reducer
 * @param {Object|String} [initialStateOrPrefix]
 * @param {String} [prefix]
 * @return {Function} Reducer
 */
export default function createReducer(Reducer, initialStateOrPrefix, prefix) {
  const hasPrefix = isString(prefix);
  const initialState = hasPrefix ? initialStateOrPrefix : {};
  const typePrefix = !hasPrefix && isString(initialStateOrPrefix) ? initialStateOrPrefix : prefix;

  const { reducers, initialState: reducerInitialState } = createInstance(Reducer, typePrefix);
  const reducer = reduceReducers(...reducers);

  return (state = (reducerInitialState || initialState), action) => reducer(state, action);
}
