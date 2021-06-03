import axios from 'axios';
// import { patientApiRequest, patientApiSuccess } from '../actions/patientAction';
import url from '../apiUrl/apiLink';

const registration = (patientData) => {
  // dispatch(patientApiRequest());
  axios.post(`${url}/registrations`, patientData)
    .then((response) => {
      const patientRes = response.data.status;
      console.log('After API Call');
      console.log(patientRes);
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
      // dispatch(patientApiFailure(errorMsg));
    });
};

export default registration;
