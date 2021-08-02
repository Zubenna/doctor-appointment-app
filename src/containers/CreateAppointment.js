import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import DatePicker from 'react-datetime';
import moment from 'moment';
import SideNav from '../components/SideNav';
import 'react-datetime/css/react-datetime.css';
import url from '../apiUrl/apiLink';
import { bookAppointment } from '../actions/appointmentAction';
import Style from '../styles/CreateAppointment.module.css';

const CreateAppointment = (props) => {
  const LOCATIONS = [
    'Select location',
    'Lagos',
    'Abuja',
    'Port Harcourt',
    'Aba',
    'Onitsha',
    'Owerrri',
  ];
  /* eslint-disable camelcase */
  const user = useSelector((state) => state.user.user);
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const user_id = user.id;
  const doctor_id = doctor.id;
  const [dt, setDt] = useState(moment());
  const [location, setLocation] = useState('');
  const appointment_date = dt;
  const doctor_name = doctor.full_name;

  const handleClick = (event) => {
    const { value } = event.target;
    setLocation(value);
  };

  const handleCreation = () => {
    const { history } = props;
    history.push('/appointmentDisplay');
  };

  const appointmentData = {
    doctor_id, user_id, appointment_date, location, doctor_name,
  };
  const createAppointment = () => {
    axios.post(`${url}/appointments`, appointmentData, { withCredentials: true })
      .then((response) => {
        dispatch(bookAppointment(response));
        handleCreation();
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAppointment();
  };

  const yesterday = moment().subtract(1, 'day');
  const disablePastDt = (current) => current.isAfter(yesterday);

  return (
    <section className={Style.setPage}>
      <SideNav />
      <div className={Style.formContainer}>
        <form className={Style.formBox}>
          <input type="text" name="doctor_name" value={doctor_name} required />
          <DatePicker data-testid="date" id="data-testid" value={dt} timeFormat="hh:mm A" showTimeSelect isValidDate={disablePastDt} dateFormat="DD-MM-YYYY" onChange={(val) => setDt(val)} />
          <select name="location" id="select" data-testid="areas" onChange={handleClick}>
            {LOCATIONS.map((city) => <option value={city} key={city}>{city}</option>)}
          </select>
          <button type="submit" className={Style.createBtn} onClick={handleSubmit}>Create Appointment</button>
        </form>
      </div>
    </section>
  );
};

CreateAppointment.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default CreateAppointment;
