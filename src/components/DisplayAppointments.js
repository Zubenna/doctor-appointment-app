import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DoctorFilter from './DoctorFilter';
import Style from '../styles/DisplayAppoint.module.css';

const DisplayAppointments = () => {
  const appointments = useSelector((state) => state.appointments.appointments);
  console.log('In appointment display comp', appointments);

  return (
    /* eslint-disable camelcase */
    <section className={Style.setPage}>
      <DoctorFilter />
      <div className={Style.listBox}>
        <div>
          <h2>Inside Display Appointment</h2>
          <div className={`${Style.rowHead} ${Style.font}`}>
            <div>Doctor Name</div>
            <div>Appointment Date</div>
            <div>City</div>
            <div>Doctor ID</div>
          </div>
          {appointments.map((data) => (
            <div key={data.id} className={Style.itemBox}>
              <div className={Style.data}>{data.doctor_name}</div>
              <div className={`${Style.data} ${Style.dataDate}`}>
                {new Date(data.appointment_date)
                  .toLocaleDateString()}
              </div>
              <div className={Style.data}>{data.location}</div>
              <div className={Style.data}>{data.doctor_id}</div>
            </div>
          ))}
        </div>
        <Link to="/doctor" className={' '}>
          Back To Doctor Listing
        </Link>
      </div>
    </section>
  );
};

export default DisplayAppointments;
