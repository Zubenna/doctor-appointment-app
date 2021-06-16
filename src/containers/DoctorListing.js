import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { displayDoctors, filterDoctors } from '../actions/doctorAction';
import { resetAppointments } from '../actions/appointmentAction';
import { userLogout, userError } from '../actions/userAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import url from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';
import SliderShow from '../components/SliderShow';

const DoctorListing = (props) => {
  const doctors = useSelector((state) => state.allDoctors.doctors);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const fetchList = () => {
    axios.get(`${url}/doctors`)
      .then((response) => {
        const docList = response.data.data;
        dispatch(displayDoctors(docList));
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleFilter = (filter) => {
    dispatch(filterDoctors(filter));
  };

  const { history } = props;
  const handleLogout = () => {
    axios.delete(`${url}/logout`)
      .then((response) => {
        if (response.data.logged_out) {
          dispatch(userLogout(response));
          dispatch(resetAppointments());
          localStorage.setItem('user', JSON.stringify({ username: 'Guest' }));
          history.push('/');
        }
      })
      .catch((error) => {
        dispatch(userError(error));
      });
  };

  const handleAppoint = () => {
    history.push('/appointmentDisplay');
  };

  const filteredDoctors = () => {
    if (filter === 'All') return doctors;
    return doctors.filter((doctor) => doctor.specialty === filter);
  };

  return (
    <>
      <div className={Style.container}>
        <DoctorFilter
          handleFilter={handleFilter}
          handleLogout={handleLogout}
          handleAppoint={handleAppoint}
        />
        <div>
          <div className={Style.setUsername}>
            <h3>
              {`${user.username}`}
            </h3>
          </div>
          <div className={Style.textCenter}>
            <h1 className={Style.noMargin}>Choose Experienced Doctor</h1>
            <p className={Style.greyText}>Consultants with many years of experience</p>
          </div>
          <SliderShow doctors={doctors} />
          <div className={Style.displayDoctors}>
            {filteredDoctors().map((doctor) => (
              <DoctorComponent key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

DoctorListing.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorListing;
