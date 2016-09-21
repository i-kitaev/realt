import identity from 'lodash/identity';
import isFunction from 'lodash/isFunction';
import toConstant from '../utils/toConstant';

export default function makeAction(name, payload) {
  const type = toConstant(name);
  const finalPayload = isFunction(payload) ? payload : identity;

  const action = (...args) => ({
    type, payload: finalPayload(...args)
  });

  action.toString = () => type;

  return action;
}
