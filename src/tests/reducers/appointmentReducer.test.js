import appointment from '../../reducers/appointmentReducer';

describe('appointment', () => {
  it('should be a function', () => {
    const result = appointment;
    expect(typeof result).toBe('function');
  });
});
