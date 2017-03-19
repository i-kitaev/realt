import isString from './isString';
import toConstant from './toConstant';

export default function getNamespace(namespace) {
  return isString(namespace) && namespace.length ? `${toConstant(namespace)}_` : '';
}
