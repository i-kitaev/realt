export default function isFunction(object) {
  return object && Object.prototype.toString.call(object) === '[object Function]';
}
