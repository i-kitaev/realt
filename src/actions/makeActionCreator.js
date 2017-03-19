import { isFunction, isObject, identity, getActionType } from '../utils';

export default function makeActionCreator(actionName, payload, namespace, context) {
  const actionType = getActionType(actionName, namespace);
  let payloadCreator = isFunction(payload) ? payload : identity;

  if (isObject(context)) {
    payloadCreator = payloadCreator.bind(context);
  }

  function actionCreator(...args) {
    return {
      type: actionType, payload: payloadCreator(...args)
    };
  }

  actionCreator.toString = () => actionType;

  return actionCreator;
}
