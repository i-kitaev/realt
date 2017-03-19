export default function reduceObject(object, predicate) {
  return Object.keys(object).reduce((result, field) => Object.assign(
    result, predicate(field, object[field])
  ), {});
}
