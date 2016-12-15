import reduceReducers from 'reduce-reducers';
import createInstance from './createInstance';

/**
 * Create Redux reducer from Class
 * @param {Class|Object} Reducer
 * @param {Object} [initialState]
 * @return {Function} Reducer
 */
export default function createReducer(Reducer, initialState) {
  const { reducers, defaultState } = createInstance(Reducer);
  const reducer = reduceReducers(...reducers);

  return (state = (defaultState || initialState), action) => reducer(state, action);
}
