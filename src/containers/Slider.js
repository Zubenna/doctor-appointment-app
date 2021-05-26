import React, { useEffect, useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/SliderStyle.css';

const Slider = (props) => {
  const { doctors } = props;
  // const [data, setData] = useState(doctors);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = doctors.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, doctors]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {doctors.map((doctor, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1
             || (index === 0 && personIndex === doctors.length - 1)
          ) {
            position = 'lastIndex';
          }

          return (
            <article className={position} key={doctor.id}>
              <div>
                <img src={doctor.picture} alt={doctor.full_name} />
              </div>
              <h4 className="name">{doctor.full_name}</h4>
              <h4 className="name text">{doctor.location}</h4>
              <h4 className="name text">{doctor.specialty}</h4>
            </article>
          );
        })}
        <button type="button" className="prev" onClick={() => setIndex(index - 1)}>
          <FaCaretLeft />
        </button>
        <button type="button" className="next" onClick={() => setIndex(index + 1)}>
          <FaCaretRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;

Slider.propTypes = {
  doctors: PropTypes.shape([]).isRequired,
};
