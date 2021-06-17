const GET_DOCTORS = 'GET_DOCTORS';
const FILTER_DOCTORS = 'FILTER_DOCTORS';
const SELECTED_DOCTOR = 'SELECTED_DOCTOR';

const displayDoctors = (doctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
});

const selectedDoctor = (doctor) => ({
  type: SELECTED_DOCTOR,
  payload: doctor,
});

const filterDoctors = (specialty) => ({
  type: FILTER_DOCTORS,
  payload: specialty,
});

// const removeSelectedDoctor = () => ({
//   type: FILTER_DOCTORS,
//   payload: specialty,
// });

export {
  GET_DOCTORS, FILTER_DOCTORS, SELECTED_DOCTOR, displayDoctors, filterDoctors, selectedDoctor,
};
