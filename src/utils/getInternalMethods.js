export default Class =>
  Object.getOwnPropertyNames(Class.prototype).reduce((object, methodName) => (
    methodName !== 'constructor' ? { ...object, [methodName]: Class.prototype[methodName] } : object
  ), {});
