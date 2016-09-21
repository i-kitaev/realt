import reduceReducers from 'reduce-reducers';
import createInstance from './createInstance';

/**
 * Create Redux reducer from Class
 * @param {Class} Reducer
 * @return {Function} Reducer
 */
export default function createReducer(Reducer) {
  const { reducers, initialState } = createInstance(Reducer);
  const reducer = reduceReducers(...reducers);

  return (state = initialState, action) => reducer(state, action);
}
