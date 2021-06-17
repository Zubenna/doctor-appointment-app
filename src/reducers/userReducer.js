const initialState = {
  status: 'NOT_CONNECTED',
  user: {},
  error: 'NO_ERROR',
  errorMessage: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN': return { ...state, status: 'CONNECTED', user: action.payload };
    case 'LOGGED_OUT': return { ...state, status: 'NOT_CONNECTED', user: { username: 'Guest' } };
    case 'LOGIN_ERROR': return { ...state, errorMessage: 'Username or password incorrect' };
    case 'CREATE_ACCOUNT_ERROR': return { ...state, errorMessage: 'Please check your information' };
    case 'USER_ERROR': return { ...state, error: 'Something Went Wrong', user: {} };
    default: return state;
  }
};

export default userReducer;
