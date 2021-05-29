import React from 'react';
import { Link } from 'react-router-dom';
// import HomeStyles from '../styles/HomeStyles.module.css';

const Home = () => (
  <div>
    <h1>BOOK APPOINTMENT WITH A DOCTOR</h1>
    <div>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
      <Link to="/signup">
        <button type="button">Register</button>
      </Link>
    </div>
  </div>
);

export default Home;
