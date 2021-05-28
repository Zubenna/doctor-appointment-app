import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import createPatient from '../actions/patientAction';

const SignUp = () => {

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    // handleNameChange = (e) => {
    //     return setFullname()
    // }
    return (
        <form>
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value) } placeholder="Full name" required />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value) } placeholder="Username" required />
          <input type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value) } placeholder="Phone number" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" required />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value) } placeholder="Address" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" required />

        </form>
    );
};

export default SignUp;