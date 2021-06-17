import { doctorsReducer, selectedDoctorReducer } from '../../reducers/doctorReducer';

describe('doctorReducer', () => {
  it('should be a function', () => {
    const result = doctorsReducer;
    expect(typeof result).toBe('function');
  });
});

describe('selectedDoctorReducer', () => {
  it('should be a function', () => {
    const result = selectedDoctorReducer;
    expect(typeof result).toBe('function');
  });
});
