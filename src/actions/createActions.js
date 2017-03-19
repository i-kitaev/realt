import { isObject, isArray, isFunction, isString, isUndefined, reduceObject } from '../utils';
import createInstance from './createInstance';
import makeActionCreator from './makeActionCreator';

/**
 * Create Redux actions from object, array or class
 * @param {Object.<Function>|Array.<String>|Function} Actions
 * @param {String} [namespace]
 * @return {Object} ActionCreators
 */
export default function createActions(Actions, namespace) {
  if (!(isObject(Actions) || isArray(Actions) || isFunction(Actions))) {
    throw new Error('Expected the actions to be object, array or class.');
  }

  if (!isUndefined(namespace) && !isString(namespace)) {
    throw new Error('Expected the type namespace to be a string.');
  }

  const actions = {};
  const instance = createInstance(Actions);

  Object.assign(actions, reduceObject(instance, (field, value) => ({
    [field]: makeActionCreator(field, value, namespace, actions)
  })));

  return actions;
}
