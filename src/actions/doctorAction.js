const GET_DOCTORS = 'GET_DOCTORS';
const FILTER_DOCTORS = 'FILTER_DOCTORS'

const displayDoctors = (doctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
});

const filterDoctors = (specialty) => ({
  type: FILTER_DOCTORS,
  payload: specialty,
});

export { GET_DOCTORS, FILTER_DOCTORS, displayDoctors, filterDoctors };
