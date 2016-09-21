export default function makeActionHandler(reducerHandler, actionCreator, initialState) {
  const actionCreatorType = actionCreator.toString();

  return (state = initialState, action) => (
    actionCreatorType === action.type ? reducerHandler(state, action.payload) : state
  );
}
