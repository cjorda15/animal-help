import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { configureStore } from './configStore';
import App from './components/App';
import './helper/animations.js';
import './styles/index.css';

const history = createHistory();
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <Route to="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
