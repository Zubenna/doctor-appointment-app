import React from 'react';
import PropTypes from 'prop-types';
import Style from '../styles/DoctorFilter.module.css';

const DoctorFilter = (props) => {

  const { handleFilter, doctors } = props;

  const handleClick = (event) => {
    const { value } = event.target;
    handleFilter(value);
  };

  return (
  <div className={Style.filterBox}>
    <h3>I am from Doctor Filter Component</h3>
    <h3>Filter by Specialty</h3>
    <button type="button" onClick={handleClick}>All</button>
    <button type="button" onClick={handleClick}>Gynecologist</button>
    <button type="button" onClick={handleClick}>Neurologist</button>
    <button type="button" onClick={handleClick}>Paediatrician</button>
    <button type="button" onClick={handleClick}>Surgeon</button>
    <button type="button" onClick={handleClick}>Cardiologist</button>
  </div>
  );

};


DoctorFilter.propTypes = {
  doctors: PropTypes.shape([]).isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default DoctorFilter;




