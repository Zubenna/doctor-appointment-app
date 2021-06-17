import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Signup from '../../containers/Signup';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Signup', () => {
  test('renders Signup component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/signup" component={Signup} />
          </Router>
        </Provider>
      ),
    );
    const container = queryAllByTestId('container');
    expect(container).toBeTruthy();
  });

  test('it should have a Register form', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/signup" component={Signup} />
          </Router>
        </Provider>
      ),
    );
    const form = queryAllByTestId('form');
    expect(form).toBeTruthy();
  });
});
