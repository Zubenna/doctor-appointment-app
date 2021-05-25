import '../styles/App.css';
import Header from './Header';
import DoctorListing from '../containers/DoctorListing';

function App() {
  return (
    <div className="App">
      <Header />
      <DoctorListing />
    </div>
  );
}

export default App;
