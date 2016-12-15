import isObject from 'lodash/isObject';

export default function makeActionHandler(reducerHandler, actionCreator, initialState) {
  const actionCreatorType = isObject(actionCreator) ? actionCreator.toString() : actionCreator;

  return (state = initialState, action) => (
    actionCreatorType === action.type ? reducerHandler(state, action.payload) : state
  );
}
