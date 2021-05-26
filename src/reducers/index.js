import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import doctorsReducer from './doctorReducer';

const rootReducer = combineReducers({
  allDoctors: doctorsReducer,
  filter: filterReducer,
});

export default rootReducer;
