import makeActionHandler from './makeActionHandler';

export default function createInstance(Reducer) {
  const reducers = [];

  class ReducerGenerator extends Reducer {
    /**
     * Attaches reducer's handler function to specific action type
     * @param {function} reducerHandler
     * @param {object} actionCreator
     */
    bindHandler(reducerHandler, actionCreator) {
      reducers.push(makeActionHandler(reducerHandler, actionCreator, this.initialState));
    }
  }

  const reducer = new ReducerGenerator();

  return { reducers, initialState: reducer.initialState };
}
