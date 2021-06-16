import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DoctorDetails from '../containers/DoctorDetails';
import DoctorListing from '../containers/DoctorListing';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Cover from './Cover';
import CreateAppointment from '../containers/CreateAppointment';
import DisplayAppointments from './DisplayAppointments';
import EditAppointment from './EditAppointment';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Cover} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/appointment" component={CreateAppointment} />
      <Route path="/appointmentDisplay" component={DisplayAppointments} />
      <Route path="/doctor/:doctorId" component={DoctorDetails} />
      <Route path="/doctor" component={DoctorListing} />
      <Route path="/edit" component={EditAppointment} />
    </Switch>
  </Router>
);

export default Routes;
