import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Style from '../styles/DoctorComponent.module.css';

const DoctorComponent = (props) => {
  const { doctor } = props;
  const uniqueKey = doctor.id;
  return (
    <div>
      <div key={uniqueKey}>
        <Link to={`/doctor/${uniqueKey}`} className={Style.setLink}>
          <div className={Style.docImageBox}>
            <img src={doctor.picture} alt={doctor.full_name} data-testid="image" className={Style.img} />
          </div>
          <div className={Style.centerName}>
            <h3 className={Style.noMargin} data-testid="name">{doctor.full_name}</h3>
          </div>
        </Link>
        <div className={Style.setLine}>
          <span>------------------</span>
        </div>
        <div className={Style.alignLocation}>
          <h5 className={`${Style.noMargin} ${Style.text}`}>{doctor.specialty}</h5>
          <h5 className={`${Style.noMargin} ${Style.text}`}>{doctor.location}</h5>
          <div className={Style.socialHandle}>
            <a href="https://" className={Style.socialColor}>
              <FaFacebook />
            </a>
            <a href="https://" className={Style.socialColor}>
              <FaTwitter />
            </a>
            <a href="https://" className={Style.socialColor}>
              <FaInstagram />
            </a>
          </div>
        </div>
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
