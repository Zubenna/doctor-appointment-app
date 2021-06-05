import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import HomeStyles from '../styles/HomeStyles.module.css';

const Cover = (props) => {
  const user = useSelector((state) => state.user.user);
  const { history } = props;
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
Cover.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Cover;
