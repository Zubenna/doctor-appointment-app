import React from 'react';
import { Link } from 'react-router-dom';
// import HomeStyles from '../styles/HomeStyles.module.css';

const Home = () => (
  <div>
    <h1>BOOKING AIR TICKETS MADE EASY</h1>
    <div>
      <Link to="/login">
        <button type="button" >Login</button>
      </Link>
      <Link to="/register" >
        <button type="button"></button>
      </Link>
    </div>
  </div>
);

export default Home;