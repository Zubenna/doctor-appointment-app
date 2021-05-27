import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import { selectedDoctorReducer, doctorsReducer } from './doctorReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  doctor: selectedDoctorReducer,
  filter: filterReducer,
});

export default rootReducer;
