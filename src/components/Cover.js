import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Style from '../styles/Signup.module.css';

const Cover = (props) => {
  const user = useSelector((state) => state.user.user);
  const { history } = props;
  if (user.username !== 'Guest') {
    history.push('/doctor');
  }
  return (
    <div className={`${Style.container} ${Style.coverBg}`}>
      <h1 className={Style.setTitle}>BOOK APPOINTMENT WITH A DOCTOR</h1>
      <div className={Style.homeForm}>
        <Link to="/login" className={Style.setLinkBtn}>
          Login
        </Link>
        <Link to="/signup" className={Style.setLinkBtn}>
          Register
        </Link>
      </div>
    </div>
  );
};
Cover.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Cover;
