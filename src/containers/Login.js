import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import url from '../apiUrl/apiLink';
import { userAccSuccess, userLoginError, userError } from '../actions/userAction';
import Style from '../styles/Signup.module.css';

const Login = (props) => {
  /* eslint-disable camelcase */
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const { history } = props;
  const userData = { username, password };

  const loginProcess = () => {
    axios.post(`${url}/login`, userData)
      .then((response) => {
        console.log('In Login action');
        if (response.data.logged_in) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
          history.push('/doctor');
          dispatch(userAccSuccess(response.data.data));
        } else {
          dispatch(userLoginError());
        }
      })
      .catch((error) => {
        dispatch(userError(error));
        history.push('/login');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginProcess();
  };

  return (
    <div className={Style.container}>
      <form className={Style.signupForm}>
        <input type="text" name="username" id="uname" value={username} onChange={handleChange} placeholder="Enter username" required />
        <input type="password" name="password" id="pword" value={password} onChange={handleChange} placeholder="Enter password" required />
        <button type="submit" onClick={handleSubmit}>Login</button>
        <div>
          <span>Have not registered? </span>
          <Link to="/" className={Style.submitBtn}>Home</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
