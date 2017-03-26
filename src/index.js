import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '/routes';
import 'typeface-open-sans';
import 'typeface-montserrat';
import '@atlaskit/css-reset';
import '/assets/styles/global.css';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root'),
);
