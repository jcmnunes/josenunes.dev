import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { intlReducer as intl } from 'react-intl-redux';
import global from './globalReducer';

const rootReducer = combineReducers({
  intl,
  routing,
  global,
});

export default rootReducer;
