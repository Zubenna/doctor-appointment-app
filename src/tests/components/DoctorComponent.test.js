import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import DoctorComponent from '../../components/DoctorComponent';

describe('<DoctorComponent />', () => {
  const doctor = {
    doctor: [{
      full_name: 'Bill George', specialty: 'Surgeon', location: 'Port Harcourt', email: 'b.george@gmail.com', phonenumber: '09076695643', years_of_experience: 10,
    }],
  };

  it('it renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <DoctorComponent doctor={doctor} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an image', () => {
    const { queryAllByTestId } = render(
      <Router>
        <DoctorComponent doctor={doctor} />
      </Router>,
    );
    const image = queryAllByTestId('image');
    expect(image[0]).toBeTruthy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
        <DoctorComponent doctor={doctor} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).toBeTruthy();
  });

  it('renders an image corecctly', () => {
    const { queryAllByTestId } = render(
      <Router>
        <DoctorComponent doctor={doctor} />
      </Router>,
    );
    const image = queryAllByTestId('img');
    expect(image[0]).toBeFalsy();
  });

  it('renders a name', () => {
    const { queryAllByTestId } = render(
      <Router>
        <DoctorComponent doctor={doctor} />
      </Router>,
    );
    const name = queryAllByTestId('name');
    expect(name[0]).not.toBeFalsy();
  });
});
