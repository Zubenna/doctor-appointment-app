export const LOGGED_IN = 'LOGGED_IN';
export const CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const USER_ERROR = 'USER_ERROR';
export const LOGGED_OUT = 'LOGGED_OUT';

export const userAccSuccess = (data) => ({
  type: LOGGED_IN,
  payload: data,
});

export const userAccError = (error) => ({
  type: CREATE_ACCOUNT_ERROR,
  payload: error,
});

export const userLoginError = () => ({
  type: LOGIN_ERROR,
});

export const userError = (error) => ({
  type: USER_ERROR,
  payload: error,
});

export const userLogout = (response) => ({
  type: LOGGED_OUT,
  response,
});
