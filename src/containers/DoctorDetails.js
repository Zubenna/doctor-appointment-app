import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectedDoctor } from '../actions/doctorAction';
import SideNav from '../components/SideNav';
import Style from '../styles/DoctorDetails.module.css';
import url from '../apiUrl/apiLink';

const DoctorDetails = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  const { doctorId } = useParams();
  const fetchDoctorDetail = () => {
    axios.get(`${url}/doctors/${doctorId}`)
      .then((response) => {
        const docDetail = response.data.data;
        dispatch(selectedDoctor(docDetail));
      })
      .catch(() => {
      });
  };
  useEffect(() => {
    if (doctorId && doctorId !== '') {
      fetchDoctorDetail();
    }
  }, [doctorId]);

  return (
    <section className={Style.detailBox}>
      <SideNav />
      <div className={`${Style.detailBox} ${Style.flexCol}`}>
        <div className={Style.picBox}>
          <img src={doctor.picture} alt={doctor.full_name} className={Style.img} />
        </div>
        <div className={Style.nameDetail}>
          <div className={Style.positionName}>
            <div>
              <h2 className={Style.noMargin}>{doctor.full_name}</h2>
            </div>
            <div>
              <h2 className={`${Style.noMargin} ${Style.smallFont}`}>{doctor.specialty}</h2>
            </div>
          </div>
          <div className={Style.moreDetail}>
            <div className={`${Style.setRow} ${Style.grayBg}`}>
              <span>Location:</span>
              <p className={Style.noMargin}>{doctor.location}</p>
            </div>
            <div className={Style.setRow}>
              <span>Email:</span>
              <p className={Style.noMargin}>{doctor.email}</p>
            </div>
            <div className={`${Style.setRow} ${Style.grayBg}`}>
              <span>Phone number:</span>
              <p className={Style.noMargin}>{doctor.phonenumber}</p>
            </div>
            <div className={Style.setRow}>
              <span>Years of experience:</span>
              <p className={Style.noMargin}>{doctor.years_of_experience}</p>
            </div>
            <div className={Style.back}>
              <Link to="/appointment" className={Style.bookApmnt}>
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
