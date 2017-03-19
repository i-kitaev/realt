import { createAction, createReducer } from '../../src';

describe('createReducer', () => {
  it('throws if reducer is not object or class', () => {
    expect(() =>
      createReducer()
    ).toThrow();

    expect(() =>
      createReducer(null)
    ).toThrow();

    expect(() =>
      createReducer(true)
    ).toThrow();

    expect(() =>
      createReducer([])
    ).toThrow();

    expect(() =>
      createReducer({})
    ).not.toThrow();

    expect(() =>
      createReducer(class {})
    ).not.toThrow();
  });

  it('passes the reducer object', () => {
    const reducer = createReducer({
      test(state, payload) {
        return { data: payload };
      }
    });

    expect(typeof reducer).toBe('function');
    expect(reducer(undefined, {
      type: 'TEST',
      payload: { text: 'test' }
    })).toEqual({
      data: { text: 'test' }
    });
  });

  it('passes the reducer object and initial state', () => {
    const reducer = createReducer({
      test(state, payload) {
        return Object.assign(state, { data: payload });
      }
    }, {
      initialData: 'test'
    });

    expect(typeof reducer).toBe('function');
    expect(reducer(undefined, {
      type: 'TEST',
      payload: { text: 'test' }
    })).toEqual({
      initialData: 'test',
      data: { text: 'test' }
    });
  });

  it('passes the reducer class', () => {
    const firstAction = createAction('first', () => ({ text: 'test' }));
    const secondAction = createAction('second');

    const reducer = createReducer(class {
      constructor() {
        this.bindAction(firstAction, this.handleFirst);
        this.bindHandler(this.handleSecond, secondAction);
      }

      handleFirst(state, payload) {
        return { data: payload };
      }

      handleSecond(state, payload) {
        return payload;
      }
    });

    expect(typeof reducer).toBe('function');

    expect(reducer(undefined, firstAction())).toEqual({
      data: { text: 'test' }
    });

    expect(reducer(undefined, secondAction(1))).toEqual(1);
  });
});
