import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import registration from '../apiRequest/registration';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    handleChange = (e) => {
      if (e.target.name === 'fullname'){
          setFullname(e.target.value);
      }
      else if (e.target.name === 'username'){
        setUsername(e.target.value);
      }
      else if (e.target.name === 'phonenumber'){
        setPhonenumber(e.target.value);
      }
      else if (e.target.name === 'email'){
        setEmail(e.target.value);
      }
      else if (e.target.name === 'address'){
        setAddress(e.target.value);
      }
      else if (e.target.name === 'password'){
        setPassword(e.target.value);
      }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(registration({
            fullname,
            username,
            phonenumber,
            email,
            address,
            password,
        }));
        if (email || password !== '') {
          setErrorMsg('');
        //   handleRegister();
        } else {
          setErrorMsg('Please, enter valid credentials!');
        }
      };

    return (
       <div className="container">
        <form>
          <input type="text" name="fullname" id="fname" value={fullname} onChange={handleChange} placeholder="Enter full name" required />
          <input type="text" name="username" id="uname" value={username} onChange={handleChange} placeholder="Enter username" required />
          <input type="text" name="phonenumber" id="pnumber" value={phonenumber} onChange={handleChange} placeholder="Enter phone number" required />
          <input type="email" name="email" id="email" value={email} onChange={handleChange} placeholder="Enter email" required />
          <input type="text" name="address" id="address" value={address} onChange={handleChange} placeholder="Enter address" required />
          <input type="password" name="password" id="pword" value={password} onChange={handleChange} placeholder="Enter password" required />

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

export default SignUp;