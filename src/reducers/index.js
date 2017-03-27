import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { intlReducer as intl } from 'react-intl-redux';

const rootReducer = combineReducers({
  intl,
  routing,
});

export default rootReducer;
