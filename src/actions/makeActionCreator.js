import { isFunction, generateAction, getTypePrefix, toConstant } from '../utils';

export default function makeAction(prefix, name, payload) {
  const type = `${getTypePrefix(prefix)}${toConstant(name)}`;
  const finalPayload = isFunction(payload) ? payload : generateAction;

  const action = (...args) => ({
    type, payload: finalPayload(...args)
  });

  action.toString = () => type;

  return action;
}
