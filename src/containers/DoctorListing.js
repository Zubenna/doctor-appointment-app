import React, { useEffect } from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import doctorsReducer from '../actions/appointmentAction';
import url from '../apiUrl/apiLink';

const DoctorListing = () => {
  // const doctors = useSelector((state) => state.allDoctors);
  // const dispatch = useDispatch();

  const fetchList = () => {
    axios.get(`${url}/doctors`)
      .then((response) => {
        const docList = response.data;
        console.log(docList);
      // dispatch(fetchAirlineSuccess(airRes));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      // dispatch(fetchAirlines(errorMsg));
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <h5>I am from DoctorListing Component</h5>
    </div>
  );
};

export default DoctorListing;
