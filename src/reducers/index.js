import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import patientReducer from './patientReducer';
import { selectedDoctorReducer, doctorsReducer } from './doctorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  doctor: selectedDoctorReducer,
  filter: filterReducer,
  patient: patientReducer,
  user: userReducer,
});

export default rootReducer;
