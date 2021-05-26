import { FILTER_DOCTORS } from '../actions/doctorAction';

const initialState = 'All';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
