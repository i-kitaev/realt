import { isFSA } from 'flux-standard-action';
import { createActions } from '../../src';

describe('createActions', () => {
  it('throws if the first parameter(actions) is not an object, array or class', () => {
    expect(() =>
      createActions()
    ).toThrow();

    expect(() =>
      createActions('test')
    ).toThrow();

    expect(() =>
      createActions({})
    ).not.toThrow();

    expect(() =>
      createActions([])
    ).not.toThrow();

    expect(() =>
      createActions(class {})
    ).not.toThrow();
  });

  it('throws if actions namespace is not a string', () => {
    const createActionsWithActions = namespace => createActions(['create', 'update'], namespace);

    expect(() =>
      createActionsWithActions(null)
    ).toThrow();

    expect(() =>
      createActionsWithActions(true)
    ).toThrow();

    expect(() =>
      createActionsWithActions({})
    ).toThrow();

    expect(() =>
      createActionsWithActions([])
    ).toThrow();

    expect(() =>
      createActionsWithActions(value => value)
    ).toThrow();

    expect(() =>
      createActionsWithActions('users')
    ).not.toThrow();
  });

  it('passes the object of actions', () => {
    const actions = createActions({
      create(payload) {
        return payload;
      },
      update(payload) {
        return payload;
      }
    });

    expect(typeof actions).toBe('object');
    expect(typeof actions.create).toBe('function');
    expect(typeof actions.update).toBe('function');

    expect(actions.create.toString()).toEqual('CREATE');
    expect(actions.create('user')).toEqual({
      type: 'CREATE',
      payload: 'user'
    });

    expect(actions.update.toString()).toEqual('UPDATE');
    expect(actions.update('user')).toEqual({
      type: 'UPDATE',
      payload: 'user'
    });
  });

  it('passes the array of actions names', () => {
    const actions = createActions(['create', 'update']);

    expect(typeof actions).toBe('object');
    expect(typeof actions.create).toBe('function');
    expect(typeof actions.update).toBe('function');
  });

  it('passes the class of actions', () => {
    const actions = createActions(class {
      create(payload) {
        return payload;
      }
      update(payload) {
        return payload;
      }
    });

    expect(typeof actions).toBe('object');
    expect(typeof actions.create).toBe('function');
    expect(typeof actions.update).toBe('function');

    const generatedActions = createActions(class {
      constructor() {
        this.generate('create', 'update');
      }
    });

    expect(typeof generatedActions).toBe('object');
    expect(typeof generatedActions.create).toBe('function');
    expect(typeof generatedActions.update).toBe('function');
  });

  it('checks whether the action is FSA (flux standard action)', () => {
    const actions = createActions(['test']);

    expect(isFSA(actions.test(1))).toBe(true);
  });

  it('call action from another action', () => {
    class UsersActions {
      constructor() {
        this.generate('add');
      }

      create(name) {
        return this.add(name);
      }

      createUser() {
        return this.create('user');
      }
    }

    const actions = createActions(UsersActions);

    expect(actions.createUser()).toEqual({
      type: 'CREATE_USER',
      payload: {
        type: 'CREATE',
        payload: {
          type: 'ADD',
          payload: 'user'
        }
      }
    });
  });
});
