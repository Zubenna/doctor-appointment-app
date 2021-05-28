import {
  LOGOUT_PATIENT,
  PATIENT_API_FAILURE,
  PATIENT_API_REQUEST,
  PATIENT_API_SUCCESS,
} from '../actions/patientAction';

const initialState = {
  loading: false,
  loginStatus: false,
  patient: '',
  error: '',
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case PATIENT_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PATIENT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        patient: action.payload,
        error: '',
        loginStatus: true,
      };
    case PATIENT_API_FAILURE:
      return {
        ...state,
        loading: false,
        loginStatus: false,
        patient: [],
        error: action.payload,
      };
    case LOGOUT_PATIENT:
      return {
        loading: false,
        loginStatus: false,
        patient: [],
      };
    default:
      return state;
  }
};

export default patientReducer;
