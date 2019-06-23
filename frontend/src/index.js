import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import './index.css';

import Home from './Home';
import DonePage from './pages/DonePage';

import { UserSettingsProvider } from './context/userSettingsContext';

const App = ({ children }) => (
  <Router>
    <Home path="/" />
    <DonePage path="/done" />
  </Router>
);

ReactDOM.render(
  <UserSettingsProvider>
    <App />
  </UserSettingsProvider>,
  document.getElementById('root')
);
