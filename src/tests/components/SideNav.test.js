import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import SideNav from '../../components/SideNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('SideNav', () => {
  test('matches SideNav snapshot', () => {
    const tree = renderer
      .create(
        (
          <Provider store={store}>
            <Router>
              <SideNav />
            </Router>
          </Provider>
        ),
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders SideNav component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/side" component={SideNav} />
          </Router>
        </Provider>
      ),
    );
    const container = queryAllByTestId('container');
    expect(container).toBeTruthy();
  });
});
