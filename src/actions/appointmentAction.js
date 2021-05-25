const GET_DOCTORS = 'GET_DOCTORS';

const displayDoctors = (doctors) => ({
  type: GET_DOCTORS,
  payload: doctors,
});

export { GET_DOCTORS, displayDoctors };
