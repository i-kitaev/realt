import getObjectMethods from './getObjectMethods';

export default function getClassMethods(Class, excludeMethods) {
  const methods = {};

  if (Class !== Function.prototype) {
    Object.assign(methods,
      getObjectMethods(Class, excludeMethods),
      getClassMethods(Object.getPrototypeOf(Class))
    );
  }

  return methods;
}
