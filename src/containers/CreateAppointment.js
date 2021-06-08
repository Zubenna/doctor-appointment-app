import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import SideNav from '../components/SideNav';
import 'react-datepicker/dist/react-datepicker.css';
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
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const appointment_date = date;
  const doctor_name = doctor.full_name;

  const handleChange = (date) => setDate(date);

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
  return (
    <section className={Style.setPage}>
      <SideNav />
      <div className={Style.formContainer}>
        <form className={Style.formBox}>
          <input type="text" name="doctor_name" value={doctor_name} required />
          <DatePicker data-testid="date" selected={date} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" onChange={handleChange} />
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
