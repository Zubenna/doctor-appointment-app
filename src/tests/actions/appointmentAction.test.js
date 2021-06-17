import { bookAppointment, loadAppointments } from '../../actions/appointmentAction';

const bookAppoint = bookAppointment();
const loadAppoint = loadAppointments('data');

describe('Doctor actions', () => {
  test('value of type on bookAppointment should be BOOK_APPOINTMENT', () => {
    expect(bookAppoint.type).toBe('BOOK_APPOINTMENT');
  });

  test('value of payload on bookAppointment should be doctors', () => {
    expect(bookAppoint.payload).not.toBe(null);
  });

  test('value of type on loadAppointments should be  LOAD_APPOINTMENTS', () => {
    expect(loadAppoint.type).toBe('LOAD_APPOINTMENTS');
  });

  test('value of payload on loadAppointments should be doctors', () => {
    expect(loadAppoint.payload).toBe('data');
  });
});
