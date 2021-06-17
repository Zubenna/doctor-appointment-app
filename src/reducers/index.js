import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import { selectedDoctorReducer, doctorsReducer } from './doctorReducer';
import userReducer from './userReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  doctor: selectedDoctorReducer,
  filter: filterReducer,
  user: userReducer,
  appointments: appointmentReducer,
});

export default rootReducer;
