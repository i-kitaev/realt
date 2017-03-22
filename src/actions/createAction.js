import { isString, isFunction, isUndefined } from '../utils';
import makeActionCreator from './makeActionCreator';

/**
 * Creates the new Redux action with given name
 * @param {String} actionName
 * @param {Function|String} [payloadCreator]
 * @param {String} [namespace]
 * @return {Object} ActionCreator
 */
export default function createAction(actionName, payloadCreator, namespace) {
  if (isString(payloadCreator) && isUndefined(namespace)) {
    namespace = payloadCreator;
    payloadCreator = undefined;
  }

  if (!isString(actionName)) {
    throw new Error('Expected the action name to be a string.');
  }

  if (!isUndefined(payloadCreator) && !isFunction(payloadCreator)) {
    throw new Error('Expected the payload creator to be a function.');
  }

  if (!isUndefined(namespace) && !isString(namespace)) {
    throw new Error('Expected the type namespace to be a string.');
  }

  return makeActionCreator(actionName, payloadCreator, namespace);
}
