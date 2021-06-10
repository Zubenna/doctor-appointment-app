import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import BookNav from '../../components/BookNav';

const mockStore = configureMockStore();
const store = mockStore({});

describe('BookNav', () => {
  test('matches BookNav snapshot', () => {
    const tree = renderer
      .create(
        (
          <Provider store={store}>
            <Router>
              <BookNav />
            </Router>
          </Provider>
        ),
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders BookNav component', () => {
    const { queryAllByTestId } = render(
      (
        <Provider store={store}>
          <Router>
            <Route path="/book" component={BookNav} />
          </Router>
        </Provider>
      ),
    );
    const container = queryAllByTestId('container');
    expect(container).toBeTruthy();
  });
});
