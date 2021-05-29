import axios from 'axios';
import { patientApiRequest, patientApiSuccess, patientApiFailure } from '../actions/patientAction';
import { url } from '../apiUrl/apiLink';

const registration = (patientData) => (dispatch) => {
  // console.log(patientData);
  dispatch(patientApiRequest());
  // console.log('After first dispatch');
  axios.post(`${url}/registrations`, patientData)
    .then((response) => {
      // console.log('After API Call');
      const patientRes = response.data.status;
      console.log('After API Call');
      console.log(patientData);
      // console.log('After API Call');
      console.log(patientRes);
      dispatch(patientApiSuccess(patientRes));
      // console.log('account created');
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(patientApiFailure(errorMsg));
    });
};

export default registration;
