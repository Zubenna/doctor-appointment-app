import { createStore, applyMiddleware } from 'redux';
import rootReducer from './index';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
