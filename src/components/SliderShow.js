import React from 'react';
import '../styles/SliderStyle.css';
import {
  FaCaretLeft, FaCaretRight, FaFacebook, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SliderShow = (props) => {
  const { doctors } = props;
  const renderSlides = () => doctors.map((doctor) => (
    <section className="position" key={doctor.id}>
      <div className="imgSize">
        <img className="img" src={doctor.picture} alt={doctor.full_name} />
      </div>
      <div className="centerName">
        <h3 className="noMargin">{doctor.full_name}</h3>
      </div>
      <div className="setLine">
        <span>------------------</span>
      </div>
      <div className="alignLocation">
        <h5 className="noMargin text">{doctor.specialty}</h5>
        <h5 className="noMargin text">{doctor.location}</h5>
        <div className="socialHandle">
          <a href="https://" className="socialColor">
            <FaFacebook />
          </a>
          <a href="https://" className="socialColor">
            <FaTwitter />
          </a>
          <a href="https://" className="socialColor">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  ));

  return (
    <div className="Appx">
      <Slider
        slidesToShow={3}
        slidesToScroll={3}
        autoplay
        autoplaySpeed={3000}
        arrows={false}
      >
        {renderSlides()}
      </Slider>
      <button type="button" className="prev">
        <FaCaretLeft />
      </button>
      <button type="button" className="next">
        <FaCaretRight />
      </button>
    </div>
  );
};

SliderShow.propTypes = {
  doctors: PropTypes.shape([]).isRequired,
};

export default SliderShow;
