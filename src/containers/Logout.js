import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { url } from '../apiUrl/apiLink';
import { userLogout, userError } from '../actions/userAction';

const Logout = (props) => {
  const dispatch = useDispatch();
  const { history } = props;

  const processLogout = () => {
    axios.delete(`${url}/logout`, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_out) {
          history.push('/');
          console.log(response.data.logged_out);
          console.log('logout processed');
        }
        dispatch(userLogout(response));
      })
      .catch((error) => {
        dispatch(userError(error));
      });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    processLogout();
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>Log Out</button>
      {/* <button type="button" onClick={handleClick}>Log Out</button> */}
      {/* <Link onClick={handleClick} to="/">Log Out</Link> */}
    </div>
  );
};

Logout.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default Logout;
