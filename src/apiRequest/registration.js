import axios from 'axios';
import { patientApiRequest, patientApiSuccess, patientApiFailure } from '../actions/patientAction';
import url from '../apiUrl/apiLink';

const registration = patientData => dispatch => {
  dispatch(patientApiRequest());
  axios.post(`${url}/registrations`, patientData)
    .then(response => {
      const patientRes = response.data;
      dispatch(patientApiSuccess(patientRes));
      // console.log(patientApiFailure);
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(patientApiFailure(errorMsg));
    });
};

export default registration;
