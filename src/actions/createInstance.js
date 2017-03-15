import { isFunction, generateAction, getInternalMethods } from '../utils';

export default function createInstance(Actions) {
  if (!isFunction(Actions)) return Actions;

  const actions = getInternalMethods(Actions);

  /* eslint-disable no-param-reassign */

  /**
   * Creates actions by their names
   * @param {...string} actionNames
   */
  Actions.prototype.generate = function generate(...actionNames) {
    actionNames.forEach((actionName) => {
      actions[actionName] = generateAction;
    });
  };

  /* eslint-enable no-param-reassign */

  return { ...actions, ...new Actions() };
}
