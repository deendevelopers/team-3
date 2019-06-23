import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Home from './Home';
import './index.css';

const App = ({ children }) => (
  <Fragment>
    <Router>
      <Home path="/" />
    </Router>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
