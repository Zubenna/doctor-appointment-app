import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { displayDoctors, filterDoctors } from '../actions/doctorAction';
import { userLogout, userError } from '../actions/userAction';
import DoctorComponent from '../components/DoctorComponent';
import DoctorFilter from '../components/DoctorFilter';
import { url } from '../apiUrl/apiLink';
import Style from '../styles/DoctorListing.module.css';
import Slider from '../components/Slider';
// import logout from './Logout';
// import DisplayAppointments from './DisplayAppointments';
import { loadAppointments } from '../actions/appointmentAction';
// import CreateAppointment from './CreateAppointment';

const DoctorListing = (props) => {
  // localStorage.clear();
  const doctors = useSelector((state) => state.allDoctors.doctors);
  const filter = useSelector((state) => state.filter);
  const user = useSelector((state) => state.user.user);
  console.log('User after initial loading', user);
  // const localStorage = '';
  // user = JSON.stringify(user);
  // const userValue = user.username;
  // const value = localStorage.setItem('user');
  if (localStorage.getItem('id') === null) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  // const storedValue = localStorage.getItem('user');
  console.log('user from local storage', user);
  const dispatch = useDispatch();
  const fetchAppointments = () => {
    axios.get(`${url}/appointments/${user.id}`)
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
  const fetchList = () => {
    axios.get(`${url}/doctors`)
      .then((response) => {
        const docList = response.data.data;
        console.log('from api', docList);
        dispatch(displayDoctors(docList));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  };

  useEffect(() => {
    fetchList();
    fetchAppointments();
  }, []);

  // useEffect(() => {
  //   fetchAppointments();
  // }, [fetchList]);

  const handleFilter = (filter) => {
    dispatch(filterDoctors(filter));
  };

  const { history } = props;
  const handleLogout = () => {
    axios.delete(`${url}/logout`, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_out) {
          history.push('/');
          console.log(response.data.logged_out);
          console.log('logout processed');
        }
        dispatch(userLogout(response));
      })
      .catch((error) => {
        dispatch(userError(error));
      });
    // logout();
    // history.push('/');
    // localStorage.clear();
  };

  const filteredDoctors = () => {
    if (filter === 'All') return doctors;
    return doctors.filter((doctor) => doctor.specialty === filter);
  };

  return (
    <>
      {/* <DisplayAppointments userId={storedValue.id} /> */}
      <div className={Style.container}>
        <DoctorFilter handleFilter={handleFilter} handleLogout={handleLogout} />
        <div>
          <div>
            <h3>
              Logged in as:
              {`  ${user.username}`}
            </h3>
          </div>
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
    </>
  );
};

DoctorListing.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorListing;
