import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { url } from '../apiUrl/apiLink';
import { bookAppointment } from '../actions/appointmentAction';

const CreateAppointment = () => {
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
    console.log('In handle click', value);
    setLocation(value);
  };

  const appointmentData = {
    doctor_id, user_id, appointment_date, location, doctor_name,
  };
  const createAppointment = () => {
    axios.post(`${url}/appointments`, appointmentData, { withCredentials: true })
      .then((response) => {
        console.log(response.data.status);
        console.log('appointment created');
        dispatch(bookAppointment(response));
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createAppointment();
  };
  return (
    <div>
      <form>
        <input type="text" name="doctor_name" value={doctor_name} required />
        <DatePicker selected={date} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" onChange={handleChange} />
        <select name="location" id="select" data-testid="areas" onChange={handleClick}>
          {LOCATIONS.map((city) => <option value={city} key={city}>{city}</option>)}
        </select>
        <button type="submit" onClick={handleSubmit}>Create Appointment</button>
      </form>
      <Link to="/doctor" className={' '}>
        Back To Doctor Listing
      </Link>
    </div>
  );
};

// CreateAppointment = {
//   history: PropTypes.instanceOf(Object).isRequired,
// };

// CreateAppointment.propTypes = {
//   user: PropTypes.shape({
//     full_name: PropTypes.string,
//     user_id: PropTypes.number,
//   }).isRequired,
// };

// CreateAppointment.propTypes = {
//   full_name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   email: PropTypes.string.isRequired,
// };

// CreateAppointment.propTypes = {
//   docId: PropTypes.string.isRequired,
// };

export default CreateAppointment;
