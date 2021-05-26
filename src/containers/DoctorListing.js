import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayDoctors, filterDoctors } from '../actions/doctorAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import url from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';

const DoctorListing = () => {
  const doctors = useSelector((state) => state.allDoctors.doctors);
  const filter = useSelector((state) => state.filter);
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
  // console.log('from state', doctors);

  const handleFilter = (filter) => {
    dispatch(filterDoctors(filter));
  };

  const filteredDoctors = () => {
    if (filter === 'All') return doctors;
    return doctors.filter((doctor) => doctor.specialty === filter);
  };

  return (
    <div className={Style.container}>
      <DoctorFilter handleFilter={handleFilter} />
      <div>
        <div className={Style.textCenter}>
          <h1 className={Style.noMargin}>Choose Experienced Doctor</h1>
          <p className={Style.greyText}>Consultants with many years of experience</p>
        </div>
        <div className={Style.displayDoctors}>
          {filteredDoctors().map((doctor) => (
            <DoctorComponent key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorListing;
