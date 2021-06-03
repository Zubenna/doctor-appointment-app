import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DoctorFilter from './DoctorFilter';
import Style from '../styles/DisplayAppoint.module.css';

const DisplayAppointments = () => {
  const appointments = useSelector((state) => state.appointments.appointments);
  console.log('In appointment display comp', appointments);

  return (
    <section className={Style.setPage}>
      <DoctorFilter />
      <div>
        <h2>Inside Display Appointment</h2>
      </div>
      {/* <div>
        {appointments.map((data) => (

        ))}
      </div> */}
      <Link to="/doctor" className={' '}>
        Back To Doctor Listing
      </Link>
    </section>
  );
};

export default DisplayAppointments;
