import { GET_DOCTORS } from '../actions/appointmentAction';

const initialState = {
  doctors: [],
};

const doctorsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOCTORS:
      return { ...state, doctors: payload };
    default:
      return state;
  }
};

export default doctorsReducer;
