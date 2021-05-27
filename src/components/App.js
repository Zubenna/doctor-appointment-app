import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import DoctorListing from '../containers/DoctorListing';
import DoctorDetails from '../containers/DoctorDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch />
        <Route path="/" exact component={DoctorListing} />
        <Route path="/doctor/:doctorId" exact component={DoctorDetails} />
        <Switch />
      </Router>
    </div>
  );
}

export default App;
