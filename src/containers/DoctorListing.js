import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { displayDoctors, filterDoctors } from '../actions/doctorAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import { url } from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';
import Slider from '../components/Slider';

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
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

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
        <Slider doctors={doctors} />
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
