import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/BookNav.module.css';

const BookNav = () => (
  <div className={Style.navBox}>
    <Link to="/doctor">Home</Link>
    <Link to="/appointment">BOOK APPOINTMENT</Link>
  </div>
);

export default BookNav;
