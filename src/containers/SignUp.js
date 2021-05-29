import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { patientApiFailure } from '../actions/patientAction';
import PropTypes from 'prop-types';
// import { url } from '../apiUrl/apiLink';
import registration from '../apiRequest/registration';

const SignUp = (props) => {
  /* eslint-disable camelcase */
  const dispatch = useDispatch();
  const [full_name, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [phone_number, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password_digest, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'fullname') {
      setFullname(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'phonenumber') {
      setPhonenumber(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleRegister = () => {
    const { history } = props;
    history.push('/doctor');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registration({
      full_name,
      username,
      phone_number,
      email,
      address,
      password_digest,
    }));
    if (email || password_digest !== '') {
      setErrorMsg('');
      handleRegister();
    } else {
      setErrorMsg('Please, enter valid credentials!');
    }
  };

  return (
    <div className="container">
      <form>
        <input type="text" name="fullname" id="fname" value={full_name} onChange={handleChange} placeholder="Enter full name" required />
        <input type="text" name="username" id="uname" value={username} onChange={handleChange} placeholder="Enter username" required />
        <input type="text" name="phonenumber" id="pnumber" value={phone_number} onChange={handleChange} placeholder="Enter phone number" required />
        <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter email" required />
        <input type="text" name="address" id="address" value={address} onChange={handleChange} placeholder="Enter address" required />
        <input type="password" name="password" id="pword" value={password_digest} onChange={handleChange} placeholder="Enter password" required />

        <button type="submit" onClick={handleSubmit}>Register</button>
        <div>
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>
        {errorMsg === '' ? '' : <h3>{errorMsg}</h3>}

      </form>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default SignUp;
