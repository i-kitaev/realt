import identity from 'lodash/identity';
import isFunction from 'lodash/isFunction';
import getInternalMethods from '../utils/getInternalMethods';

export default function createInstance(Actions) {
  if (!isFunction(Actions)) return Actions;

  const actions = getInternalMethods(Actions);
  class ActionsGenerator extends Actions {
    /**
     * Creates actions by their names
     * @param {...string} actionNames
     */
    generate(...actionNames) {
      actionNames.forEach((actionName) => {
        actions[actionName] = identity;
      });
    }
  }

  return { ...actions, ...new ActionsGenerator() };
}
