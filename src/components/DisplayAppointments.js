import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import PropTypes from 'prop-types';
import url from '../apiUrl/apiLink';
import { loadAppointments } from '../actions/appointmentAction';
// import { Link } from 'react-router-dom';
import BookNav from './BookNav';
import Style from '../styles/DisplayAppoint.module.css';

const DisplayAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const appointments = useSelector((state) => state.appointments.appointments);
  console.log('user in appointment display', user);
  const dispatch = useDispatch();
  console.log(user.id);
  const fetchAppointments = () => {
    axios.get(`${url}/appointments/${user.id}`)
      .then((response) => {
        const appointList = response.data.data;
        console.log('from appointment api', appointList);
        dispatch(loadAppointments(appointList));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  };

  useEffect(() => {
    fetchAppointments();
    // const appointments = useSelector((state) => state.appointments.appointments);
  }, []);

  useEffect(() => {
    fetchAppointments();
    // const appointments = useSelector((state) => state.appointments.appointments);
  }, []);

  console.log('In appointment display comp', appointments);
  return (
    /* eslint-disable camelcase */
    <section className={Style.setPage}>
      <BookNav />
      <div className={Style.listBox}>
        <div>
          <h2>Inside Display Appointment</h2>
          <div className={`${Style.rowHead} ${Style.font}`}>
            <div>Doctor Name</div>
            <div>Appointment Date</div>
            <div>City</div>
            <div>Doctor ID</div>
          </div>
          { appointments.map((data) => (
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
        {/* <Link to="/doctor" className={' '}>
          Back To Doctor Listing
        </Link> */}
      </div>
    </section>
  );
};

DisplayAppointments.propTypes = {
  // userId: PropTypes.number.isRequired,
  // handleLogout: PropTypes.func.isRequired,
};

export default DisplayAppointments;
