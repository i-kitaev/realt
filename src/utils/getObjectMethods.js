function getObjectMethods(Obj, excludeMethods = [], isPrototype = true) {
  const object = isPrototype ? Obj.prototype : Obj;
  const exclude = excludeMethods.concat(['constructor']);

  return Object.getOwnPropertyNames(object).reduce((methods, methodName) =>
    Object.assign(methods,
      exclude.indexOf(methodName) === -1 ? { [methodName]: object[methodName] } : object
    ), {});
}

export default getObjectMethods;
