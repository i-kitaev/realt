import createInstance from './createInstance';
import makeActionCreator from './makeActionCreator';

/**
 * Create Redux actions from Class or object
 * @param {Function|Object} Actions
 * @param {String} [prefix]
 * @return {Object} Action creators
 */
export default function createActions(Actions, prefix) {
  const actions = createInstance(Actions);

  return Object.keys(actions).reduce((result, name) => ({
    ...result, [name]: makeActionCreator(prefix, name, actions[name])
  }), {});
}
