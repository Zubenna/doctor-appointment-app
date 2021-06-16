const initialState = {
  full_name: '',
  user_id: null,
  doctor_id: null,
  appointmentStatus: 'NOT_CREATED',
  appointments: [],
};

const appointment = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_APPOINTMENT': return {
      ...state,
      appointmentStatus: 'CREATED',
    };

    case 'LOAD_APPOINTMENTS': return {
      ...state,
      appointmentStatus: 'NOT_CREATED',
      appointments: action.payload,
    };

    case 'RESET_APPOINTMENTS': return {
      ...state,
      appointments: [],
    };

    case 'SELECT_APPOINTMENT':
      return {
        ...state,
        appointment: action.payload,
      };
    default:
      return state;
  }
};

export default appointment;
