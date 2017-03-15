import isString from './isString';

export default prefix => (isString(prefix) && prefix.length ? `${prefix.toUpperCase()}_` : '');
