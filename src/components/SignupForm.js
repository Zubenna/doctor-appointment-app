// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// /* eslint-disable camelcase */
// const SignupForm = ({
//   full_name,
//   username,
//   phone_number,
//   email,
//   address,
//   password,
//   password_confirmation,
//   handleChange,
//   handleSubmit,
// }) => (
//   <form onSubmit={handleSubmit}>
//     <input type="text" placeholder="Enter full name"
// name="full_name" value={full_name} onChange={handleChange} />
//     <br />
//     <input type="text" placeholder="Enter username"
// name="username" value={username} onChange={handleChange} />
//     <br />
//     <input type="text" placeholder="Phone number"
// name="phone_number" value={phone_number} onChange={handleChange} />
//     <br />
//     <input type="email" placeholder="Enter email"
// name="email" value={email} onChange={handleChange} />
//     <br />
//     <input type="text" placeholder="Enter address"
//  name="address" value={address} onChange={handleChange} />
//     <br />
//     <input type="password" placeholder="Enter password"
// name="password" value={password} onChange={handleChange} />
//     <br />
//     <input type="password_confirmation"
// placeholder="Confirm password" name="password_confirmation"
// value={password_confirmation} onChange={handleChange} />
//     <br />
//     <button type="submit">Register</button>
//     <div>
//       <span>Already have an account? </span>
//       <Link to="/login">Login</Link>
//     </div>
//     <div className="error-message" />
//   </form>
// );

// SignupForm.propTypes = {
//   full_name: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   phone_number: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   password_confirmation: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
// };

// export default SignupForm;
