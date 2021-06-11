import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import url from '../apiUrl/apiLink';
import { loadAppointments } from '../actions/appointmentAction';
import BookNav from './BookNav';
import Style from '../styles/DisplayAppoint.module.css';

const DisplayAppointments = () => {
  const user = useSelector((state) => state.user.user);
  const appointments = useSelector((state) => state.appointments.appointments);
  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  const fetchAppointments = () => {
    axios.get(`${url}/appointments/${user.id}`)
      .then((response) => {
        const appointList = response.data.data;
        dispatch(loadAppointments(appointList));
      })
      .catch(() => {
      });
  };

  const checkStatus = () => {
    if (appointments.length === 0) {
      setData(true);
    } else {
      setData(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  useEffect(() => {
    checkStatus();
  }, [appointments]);

  return (
    /* eslint-disable camelcase */
    <section className={Style.setPage}>
      <BookNav />
      <div className={Style.listBox}>
        <div className={Style.setInfo}>
          {data ? (
            <div>
              <h3>No Appointment Booked</h3>
            </div>
          ) : <div />}
        </div>
        <div>
          <h2 className={`${Style.font} ${Style.smallFont}`}>My Booked Appointment</h2>
          <div className={`${Style.rowHead} ${Style.font}`}>
            <div>Doctor Name</div>
            <div>Appointment Date</div>
            <div>City</div>
            <div>Doctor ID</div>
          </div>
          { appointments.map((data) => (
            <div key={data.id} className={Style.itemBox}>
              <div className={`${Style.data} ${Style.docName}`}>{data.doctor_name}</div>
              <div className={`${Style.data} ${Style.dataDate}`}>
                {new Date(data.appointment_date)
                  .toLocaleDateString()}
              </div>
              <div className={`${Style.data} ${Style.alignRight} ${Style.alignCol}`}>{data.location}</div>
              <div className={`${Style.data} ${Style.alignRight}`}>{data.doctor_id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayAppointments;
