import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CREATE_ACCOUNT, RESET_ERROR } from '../actions/actionRequest';
import SignupForm from '../components/SignupForm';

class Signup extends Component {
/* eslint-disable camelcase */
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      username: '',
      phone_number: '',
      email: '',
      address: '',
      password_digest: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { errorMessage, resetError } = this.props;
    if (prevProps.errorMessage !== errorMessage) {
      const message = document.getElementsByClassName('error-message');
      message[0].innerHTML = errorMessage;
      setTimeout(() => resetError(), 3000);
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('In handle submit');
    const { createAccount } = this.props;
    createAccount(this.state);
    // console.log(this.state);
  }

  render() {
    const {
      full_name,
      username,
      phone_number,
      email,
      address,
      password_digest,
    } = this.state;

    return (
      <SignupForm
        full_name={full_name}
        username={username}
        phone_number={phone_number}
        email={email}
        address={address}
        password_digest={password_digest}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Signup.propTypes = {
  createAccount: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  resetError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errorMessage: state.user.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  createAccount: (userData) => dispatch(CREATE_ACCOUNT(userData)),
  resetError: () => dispatch(RESET_ERROR()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
