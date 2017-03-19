import { isString, identity, warning } from '../utils';

export default function generateActions(actionsNames) {
  const actions = {};

  actionsNames.forEach((actionName) => {
    if (isString(actionName)) {
      actions[actionName] = identity;
    } else {
      warning('Expected the action name to be a string.');
    }
  });

  return actions;
}
