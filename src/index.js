import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();


//i guess this is like a push notification to react from redux
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

