import { useDispatch } from 'react-redux';
import Routes from './Routes';
import { userAccSuccess } from '../actions/userAction';
import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const userFromStorage = localStorage.getItem('user');
  const currentUser = userFromStorage
    ? JSON.parse(userFromStorage)
    : { username: 'Guest' };

  dispatch(userAccSuccess(currentUser));
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
