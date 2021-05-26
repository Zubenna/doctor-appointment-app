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
          <img src={doctor.picture} alt={doctor.full_name} className={Style.img} />
        </div>
        <div className={Style.centerName}>
          <h4 className={Style.noMargin}>{doctor.full_name}</h4>
          <h5 className={`${Style.noMargin} ${Style.text}`}>{doctor.specialty}</h5>
        </div>
        <div className={Style.alignLocation}>
          <h5 className={`${Style.noMargin} ${Style.addPadding}`}>Location:</h5>
          <h5 className={`${Style.noMargin} ${Style.text}`}>{doctor.location}</h5>
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
    full_name: PropTypes.string,
    specialty: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
