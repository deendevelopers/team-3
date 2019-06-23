import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import './index.css';

import Home from './Home';
import DonePage from './DonePage';

const App = ({ children }) => (
  <Router>
    <Home path="/" />
    <DonePage path="/done" />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
