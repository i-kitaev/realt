import { getTypePrefix } from '../utils';

export default function makeActionHandler(reducerHandler, typePrefix, actionType, initialState) {
  const actionCreatorType = `${getTypePrefix(typePrefix)}${actionType}`;

  return (state = initialState, action) => (
    actionCreatorType === action.type ? reducerHandler(state, action.payload) : state
  );
}
