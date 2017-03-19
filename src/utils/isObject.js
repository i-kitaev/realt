export default function isObject(object) {
  return Object.prototype.toString.call(object) === '[object Object]';
}
