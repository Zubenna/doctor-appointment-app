// export const ADD_DATA = 'ADD_DATA';
export const BOOK_APPOINTMENT = 'BOOK_APPOINTMENT';
export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';

// export const addData = (data) => ({
//   type: ADD_DATA,
//   payload: { user, doctor },
// });

export const bookAppointment = (response) => ({
  type: BOOK_APPOINTMENT,
  payload: response,
});

export const loadAppointments = (data) => ({
  type: LOAD_APPOINTMENTS,
  payload: data,
});
