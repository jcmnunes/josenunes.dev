import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { intlReducer as intl } from 'react-intl-redux';
import global from './globalReducer';
import home from './homeReducer';

const rootReducer = combineReducers({
  intl,
  routing,
  global,
  home,
});

export default rootReducer;
