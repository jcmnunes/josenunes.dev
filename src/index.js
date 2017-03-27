import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '/store/configureStore';
import { addLocaleData } from 'react-intl';
import { Provider } from 'react-intl-redux';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt';
import routes from '/routes';
import '@atlaskit/css-reset';
import '/assets/styles/global.css';

addLocaleData([...en, ...pt]);

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root'),
);
