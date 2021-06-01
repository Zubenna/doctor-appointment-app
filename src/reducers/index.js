import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import { selectedDoctorReducer, doctorsReducer } from './doctorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  doctor: selectedDoctorReducer,
  filter: filterReducer,
  user: userReducer,
  // patient: patientReducer,
});

export default rootReducer;
