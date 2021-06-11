export const BOOK_APPOINTMENT = 'BOOK_APPOINTMENT';
export const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
export const RESET_APPOINTMENTS = 'RESET_APPOINTMENTS';
export const bookAppointment = (response) => ({
  type: BOOK_APPOINTMENT,
  payload: response,
});

export const loadAppointments = (data) => ({
  type: LOAD_APPOINTMENTS,
  payload: data,
});

export const resetAppointments = () => ({
  type: RESET_APPOINTMENTS,
});
