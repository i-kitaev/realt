export default object =>
  object && Object.prototype.toString.call(object) === '[object Function]';
