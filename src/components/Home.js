import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import HomeStyles from '../styles/HomeStyles.module.css';

const Home = ({ history }) => {
  const user = useSelector((state) => state.user.user);

  if (user.username !== 'Guest') {
    history.push('/doctor');
  }

  return (
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
};

Home.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
