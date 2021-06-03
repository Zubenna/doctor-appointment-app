import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { url } from '../apiUrl/apiLink';
import { loadAppointments } from '../actions/appointmentAction';

const DisplayAppointments = (props) => {
  const { userId } = props;
  console.log('Id from Doctorlisting', userId);
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.user);

  console.log(userId);
  const fetchAppointments = () => {
    axios.get(`${url}/appointments/${userId}`)
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
  }, []);

  return (
    <div />
  );
};

DisplayAppointments.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default DisplayAppointments;
