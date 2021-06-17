import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import DoctorDetails from '../../containers/DoctorDetails';

const mockStore = configureMockStore();
const store = mockStore({});

describe('DoctorDetails', () => {
  test('renders DoctorDetails component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/doctor/:doctorId" component={DoctorDetails} />
          </Router>
        </Provider>
      ),
    );
    const container = queryAllByTestId('container');
    expect(container).toBeTruthy();
  });
});
