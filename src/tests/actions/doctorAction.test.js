import { displayDoctors, selectedDoctor, filterDoctors } from '../../actions/doctorAction';

const displayDoc = displayDoctors('doctors');
const selectedDoc = selectedDoctor('doctor');
const filterDoc = filterDoctors('specialty');

describe('Doctor actions', () => {
  test('value of type on displayDoctors should be GET_DOCTORS', () => {
    expect(displayDoc.type).toBe('GET_DOCTORS');
  });

  test('value of payload on displayDoctors should be doctors', () => {
    expect(displayDoc.payload).toBe('doctors');
  });

  test('value of type on selectedDoctor should be SELECTED_DOCTOR', () => {
    expect(selectedDoc.type).toBe('SELECTED_DOCTOR');
  });

  test('value of payload on electedDoctor should be doctor', () => {
    expect(selectedDoc.payload).toBe('doctor');
  });

  test('value of type on filterDoctors should be FILTER_DOCTORS', () => {
    expect(filterDoc.type).toBe('FILTER_DOCTORS');
  });

  test('value of payload on filterDoctors should be specialty', () => {
    expect(filterDoc.payload).toBe('specialty');
  });
});
