import { isObject, isArray, isFunction, getClassMethods } from '../utils';

import generateActions from './generateActions';

function createInstanceFromObject(actions) {
  return actions;
}

function createInstanceFromArray(actions) {
  return generateActions(actions);
}

function createInstanceFromClass(ActionsClass) {
  const actions = getClassMethods(ActionsClass);

  /**
   * Creates actions by their names
   * @param {...string} actionsNames
   */
  ActionsClass.prototype.generate = function generate(...actionsNames) {
    Object.assign(actions, generateActions(actionsNames));
  };

  return { ...actions, ...new ActionsClass() };
}

export default function createInstance(Actions) {
  let actions = {};

  if (isObject(Actions)) {
    actions = createInstanceFromObject(Actions);
  } else if (isArray(Actions)) {
    actions = createInstanceFromArray(Actions);
  } else if (isFunction(Actions)) {
    actions = createInstanceFromClass(Actions);
  }

  return actions;
}
