import getNamespace from './getNamespace';
import toConstant from './toConstant';

const PREFIXES = ['handle', 'reducerFor'];

export default function getActionType(actionName, namespace) {
  let actionType = actionName;

  PREFIXES.forEach((prefix) => {
    if (actionType.indexOf(prefix) === 0) {
      actionType = actionType.replace(prefix, '');
    }
  });

  return `${getNamespace(namespace)}${toConstant(actionType)}`;
}
