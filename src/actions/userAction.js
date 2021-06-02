// import axios from 'axios'; CREATE_ACCOUNT_ERROR
// import { url } from '../apiUrl/apiLink'; LOGIN_ERROR USER_ERROR LOGGED_OUT
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

// export const CHECK_STATUS = () => (dispatch) => {
//   axios.get(`${url}/logged_in`, { withCredentials: true })
//     .then((response) => {
//       if (response.data.logged_in) {
//         dispatch({ type: 'LOGGED_IN', payload: response });
//       } else if (!response.data.logged_in) {
//         dispatch({ type: 'LOGGED_OUT', response });
//       }
//     })
//     .catch((error) => {
//       dispatch({ type: 'USER_ERROR', error });
//     });
// };

// export const LOGIN = (userData, ownProps) => (dispatch) => {
//   const user = {
//     username: userData.username,
//     password: userData.password,
//   };

//   axios.post(`${url}/login`, user)
//     .then((response) => {
//       console.log('In Login action');
//       if (response.data.logged_in) {
//         ownProps.history.push('/doctor');
//         // console.log('Login successful');
//         dispatch({ type: 'LOGGED_IN', payload: response });
//       } else {
//         dispatch({ type: 'LOGIN_ERROR' });
//         ownProps.history.push('/login');
//       }
//     })
//     .catch((error) => {
//       dispatch({ type: 'USER_ERROR', error });
//     });
// };

// export const RESET_ERROR = () => ({
//   type: 'RESET_ERROR',
// });

// export const LOGOUT = () => (dispatch) => {
//   axios.delete(`${url}/logout`, { withCredentials: true })
//     .then((response) => {
//       dispatch({ type: 'LOGGED_OUT', response });
//     })
//     .catch((error) => {
//       dispatch({ type: 'USER_ERROR', error });
//     });
// };

// export const CREATE_ACCOUNT = (userData) => (dispatch) => {
//   let uStatus = '';
//   const user = {
//     full_name: userData.full_name,
//     username: userData.username,
//     phone_number: userData.phone_number,
//     email: userData.email,
//     address: userData.address,
//     password: userData.password,
//     password_confirmation: userData.password_confirmation,
//   };

//   axios.post(`${url}/registrations`, user, { withCredentials: true })
//     .then((response) => {
//       console.log(response.data.status);
//       console.log(response.data.errors);
//       if (response.data.status === 'created') {
//         uStatus = 'created';
//         dispatch({ type: 'LOGGED_IN', payload: response });
//         console.log(uStatus);
//         // return 'created';
//       }
//     })
//     .catch((error) => {
//       dispatch({ type: 'CREATE_ACCOUNT_ERROR', error });
//     });
//   return uStatus;
// };
