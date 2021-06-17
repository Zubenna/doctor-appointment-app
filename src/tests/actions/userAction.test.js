import {
  userAccSuccess, userAccError, userLoginError, userError, userLogout,
} from '../../actions/userAction';

const userRequest = userAccSuccess();
const userRequestError = userAccError();
const userLogError = userLoginError();
const userActionError = userError();
const logOutError = userLogout();

describe('user actions', () => {
  test('value of type on userAccSuccess should be LOGGED_IN', () => {
    expect(userRequest.type).toBe('LOGGED_IN');
  });

  test('value of payload on userAccSuccess should not be null', () => {
    expect(userRequest.payload).not.toBe(null);
  });
  test('value of type on userAccError should be CREATE_ACCOUNT_ERROR', () => {
    expect(userRequestError.type).toBe('CREATE_ACCOUNT_ERROR');
  });

  test('value of payload on userAccSuccess should not be null', () => {
    expect(userRequestError.payload).not.toBe(null);
  });
  test('value of type on userAccError should be LOGIN_ERROR', () => {
    expect(userLogError.type).toBe('LOGIN_ERROR');
  });

  test('value of payload on userAccSuccess should not be null', () => {
    expect(userLogError.payload).toBe(undefined);
  });
  test('value of type on userAccError should be USER_ERROR', () => {
    expect(userActionError.type).toBe('USER_ERROR');
  });

  test('value of payload on userAccSuccess should not be null', () => {
    expect(userActionError.payload).not.toBe(null);
  });
  test('value of type on userAccError should be LOGGED_OUT', () => {
    expect(logOutError.type).toBe('LOGGED_OUT');
  });

  test('value of payload on userAccSuccess should not be null', () => {
    expect(logOutError.payload).not.toBe(null);
  });
});
