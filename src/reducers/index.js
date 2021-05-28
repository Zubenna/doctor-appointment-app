import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import patientReducer from './patientReducer';
import { selectedDoctorReducer, doctorsReducer } from './doctorReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  doctor: selectedDoctorReducer,
  filter: filterReducer,
  patient: patientReducer,
});

export default rootReducer;
