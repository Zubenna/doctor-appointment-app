import { userAccSuccess } from '../../actions/userAction';
import userReducer from '../../reducers/userReducer';

const state = {};
const response = {
  loginStatus: true,
  data: {},
};

const res = userReducer(state, userAccSuccess(response));
describe('user Reducer', () => {
  test('should be of type object', () => {
    expect(typeof res).toBe('object');
  });

  test('response should have a login status of true', () => {
    expect(res.loginStatus).not.toBe(false);
  });

  test('response should have data undefined', () => {
    expect(res.data).toBe(undefined);
  });
});
