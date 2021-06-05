import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/SideNav.module.css';

const SideNav = () => (
  <div className={Style.navBox}>
    <Link to="/doctor">Home</Link>
    <Link to="/appointmentDisplay">APPOINTMENTS</Link>
  </div>
);

export default SideNav;
