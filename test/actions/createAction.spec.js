import { isFSA } from 'flux-standard-action';
import { createAction } from '../../src';

describe('createAction', () => {
  it('throws if action name is not a string', () => {
    expect(() =>
      createAction()
    ).toThrow();

    expect(() =>
      createAction(null)
    ).toThrow();

    expect(() =>
      createAction(true)
    ).toThrow();

    expect(() =>
      createAction({})
    ).toThrow();

    expect(() =>
      createAction([])
    ).toThrow();

    expect(() =>
      createAction('create')
    ).not.toThrow();
  });

  it('throws if action payload creator is not string(for namespace) or function', () => {
    const createActionWithName = payload => createAction('create', payload);

    expect(() =>
      createActionWithName(null)
    ).toThrow();

    expect(() =>
      createActionWithName(true)
    ).toThrow();

    expect(() =>
      createActionWithName({})
    ).toThrow();

    expect(() =>
      createActionWithName([])
    ).toThrow();

    expect(() =>
      createActionWithName('users')
    ).not.toThrow();

    expect(() =>
      createActionWithName(value => value)
    ).not.toThrow();
  });

  it('throws if action namespace is not a string', () => {
    const createActionWithPayload = namespace => createAction('create', value => value, namespace);

    expect(() =>
      createActionWithPayload(null)
    ).toThrow();

    expect(() =>
      createActionWithPayload(true)
    ).toThrow();

    expect(() =>
      createActionWithPayload({})
    ).toThrow();

    expect(() =>
      createActionWithPayload([])
    ).toThrow();

    expect(() =>
      createActionWithPayload(value => value)
    ).toThrow();

    expect(() =>
      createActionWithPayload('users')
    ).not.toThrow();
  });

  it('passes the action name', () => {
    const action = createAction('create');

    expect(action.toString()).toEqual('CREATE');

    expect(action(1)).toEqual({
      type: 'CREATE',
      payload: 1
    });
  });

  it('passes the action name and the payload creator function', () => {
    const action = createAction('create', (first, second) => ({ first, second }));

    expect(action(1, 2)).toEqual({
      type: 'CREATE',
      payload: {
        first: 1,
        second: 2
      }
    });
  });

  it('passes the action name and the namespace', () => {
    const action = createAction('create', 'users');

    expect(action.toString()).toEqual('USERS_CREATE');

    expect(action(1)).toEqual({
      type: 'USERS_CREATE',
      payload: 1
    });
  });

  it('passes full valid params', () => {
    const action = createAction('create', (first, second) => ({ first, second }), 'users');

    expect(typeof action).toBe('function');
    expect(typeof action.toString).toBe('function');

    expect(action.toString()).toEqual('USERS_CREATE');
    expect(action(1, 2)).toEqual({
      type: 'USERS_CREATE',
      payload: {
        first: 1,
        second: 2
      }
    });
  });

  it('checks whether the action is FSA (flux standard action)', () => {
    const testAction = createAction('test');

    expect(isFSA(testAction(1))).toBe(true);
  });
});
