import createInstance from './createInstance';
import makeActionCreator from './makeActionCreator';

/**
 * Create Redux actions from Class or object
 * @param {Class} Actions
 * @return {Object} Action creators
 */
export default function createActions(Actions) {
  const actions = createInstance(Actions);

  return Object.keys(actions).reduce((result, name) => ({
    ...result, [name]: makeActionCreator(name, actions[name])
  }), {});
}
