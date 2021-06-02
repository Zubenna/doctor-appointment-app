import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './index';

const middleware = [
  reduxThunk,
];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

/* eslint-disable no-underscore-dangle */
// const store = createStore(rootReducer, applyMiddleware(thunk),
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

export default store;
