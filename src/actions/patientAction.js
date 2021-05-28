export const PATIENT_API_REQUEST = 'PATIENT_API_REQUEST';
export const PATIENT_API_SUCCESS = 'PATIENT_API_SUCCESS';
export const PATIENT_API_FAILURE = 'PATIENT_API_FAILURE';
export const LOGOUT_PATIENT = 'LOGOUT_PATIENT';

export const patientApiRequest = () => ({
    type: PATIENT_API_REQUEST,
  });
  
  export const patientApiSuccess = data => ({
    type: PATIENT_API_SUCCESS,
    payload: data.patient.username,
  });
  
  export const patientApiFailure = error => ({
    type: PATIENT_API_FAILURE,
    payload: error,
  });
  
  export const logoutPatientAction = () => ({
    type: LOGOUT_PATIENT,
  });
