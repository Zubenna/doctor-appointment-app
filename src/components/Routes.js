import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DoctorDetails from '../containers/DoctorDetails';
import DoctorListing from '../containers/DoctorListing';
import Signup from '../containers/Signup';
import Login from '../containers/Login';
import Home from './Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/doctor/:doctorId" component={DoctorDetails} />
      <Route path="/doctor" component={DoctorListing} />
    </Switch>
  </Router>
);

export default Routes;
