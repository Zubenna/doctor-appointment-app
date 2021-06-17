import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaFacebook, FaTwitter, FaGooglePlusG, FaVimeoV, FaPinterestP,
} from 'react-icons/fa';
import Style from '../styles/DoctorFilter.module.css';
import logo from '../images/all-care.png';

const DoctorFilter = (props) => {
  const { handleFilter, handleLogout, handleAppoint } = props;
  const [show1, setShow1] = useState();
  const [show2, setShow2] = useState();
  const [show3, setShow3] = useState();
  const [show4, setShow4] = useState();
  const [show5, setShow5] = useState();
  const [show6, setShow6] = useState();

  const handleClick = (event) => {
    const value = event.target.innerText;
    handleFilter(value);
    const { id } = event.target;
    if (id === 'all') {
      setShow1(true);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
      setShow6(false);
    } else if (id === 'gyne') {
      setShow1(false);
      setShow2(true);
      setShow3(false);
      setShow4(false);
      setShow5(false);
      setShow6(false);
    } else if (id === 'neuro') {
      setShow1(false);
      setShow2(false);
      setShow3(true);
      setShow4(false);
      setShow5(false);
      setShow6(false);
    } else if (id === 'paed') {
      setShow1(false);
      setShow2(false);
      setShow3(false);
      setShow4(true);
      setShow5(false);
      setShow6(false);
    } else if (id === 'surgeon') {
      setShow1(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(true);
      setShow6(false);
    } else if (id === 'cardi') {
      setShow1(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
      setShow6(true);
    } else if (id === 'appoint') {
      setShow1(false);
      setShow2(false);
      setShow3(false);
      setShow4(false);
      setShow5(false);
      setShow6(false);
    }
  };
  return (
    <div className={Style.filterBox}>
      <div className={Style.setLogo}>
        <img src={logo} alt="logo" className={Style.img} />
      </div>
      <div className={Style.buttonPosition}>
        <h3 className={Style.centerText}>Filter by Specialty</h3>
        <button type="button" className={`${Style.buttonText} ${show1 ? Style.btnActive : Style.btnNon}`} id="all" onClick={handleClick}>All</button>
        <button type="button" className={`${Style.buttonText} ${show2 ? Style.btnActive : Style.btnNon}`} id="gyne" onClick={handleClick}>Gynecologist</button>
        <button type="button" className={`${Style.buttonText} ${show3 ? Style.btnActive : Style.btnNon}`} id="neuro" onClick={handleClick}>Neurologist</button>
        <button type="button" className={`${Style.buttonText} ${show4 ? Style.btnActive : Style.btnNon}`} id="paed" onClick={handleClick}>Paediatrician</button>
        <button type="button" className={`${Style.buttonText} ${show5 ? Style.btnActive : Style.btnNon}`} id="surgeon" onClick={handleClick}>Surgeon</button>
        <button type="button" className={`${Style.buttonText} ${show6 ? Style.btnActive : Style.btnNon}`} id="cardi" onClick={handleClick}>Cardiologist</button>
        <button type="button" className={`${Style.buttonText} ${Style.btnNon}`} onClick={handleAppoint}>Appointments</button>
      </div>
      <div>
        <button type="button" className={`${Style.buttonText} ${Style.logout}`} onClick={handleLogout}>Log Out</button>
      </div>
      <div className={Style.socialHome}>

        <a href="https://" className={Style.setSocial}>
          <FaTwitter />
        </a>
        <a href="https://" className={Style.setSocial}>
          <FaFacebook />
        </a>
        <a href="https://" className={Style.setSocial}>
          <FaGooglePlusG />
        </a>
        <a href="https://" className={Style.setSocial}>
          <FaVimeoV />
        </a>
        <a href="https://" className={Style.setSocial}>
          <FaPinterestP />
        </a>
      </div>
    </div>
  );
};

DoctorFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  handleAppoint: PropTypes.func.isRequired,
};

export default DoctorFilter;
