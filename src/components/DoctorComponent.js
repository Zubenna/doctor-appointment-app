import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Style from '../styles/DoctorComponent.module.css';

const DoctorComponent = (props) => {
  const { doctor } = props;
  const uniqueKey = doctor.id;
  return (
    <div>
      <div key={uniqueKey}>
        {/* <Link> */}
        <div className={Style.docImageBox}>
          <img src={doctor.picture} alt="doctor.firstname" className={Style.img} />
        </div>
        <div>
          <h2>{doctor.firstname}</h2>
          <h2>{doctor.lastname}</h2>
        </div>
        <div>
          <h3>{doctor.specialty}</h3>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default DoctorComponent;

DoctorComponent.propTypes = {
  doctor: PropTypes.shape({
    picture: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    specialty: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
