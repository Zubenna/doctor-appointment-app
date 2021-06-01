import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable camelcase */
const LoginForm = ({
  username, password, handleSubmit, handleChange,
}) => (
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter username" name="username" value={username} onChange={handleChange} />
      <br />
      <input type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
      <br />
      <button type="submit">Log In</button>
    </form>
    <div className="error-message" />
  </>
);

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
