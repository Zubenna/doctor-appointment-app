import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayDoctors } from '../actions/doctorAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import url from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';

const DoctorListing = () => {
  const doctors = useSelector((state) => state.allDoctors.doctors);
  const dispatch = useDispatch();
  const fetchList = () => {
    axios.get(`${url}/doctors`)
      .then((response) => {
        const docList = response.data.data;
        console.log('from api', docList);
        dispatch(displayDoctors(docList));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log('Error', errorMsg);
      // dispatch(fetchAirlines(errorMsg));
      });
  };

  useEffect(() => {
    fetchList();
  }, []);
  console.log('from state', doctors);
  return (
    <div>
      <div className={Style.displayDoctors}>
        <DoctorFilter />
        {doctors.map((doctor) => (
          <DoctorComponent key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorListing;
