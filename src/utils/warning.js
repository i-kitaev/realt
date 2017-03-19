import isFunction from './isFunction';
import isUndefined from './isUndefined';

export default function warning(message) {
  /* eslint-disable no-console */
  if (!isUndefined(console) && isFunction(console.warn)) {
    console.warn(message);
  }
  /* eslint-enable no-console */
}
