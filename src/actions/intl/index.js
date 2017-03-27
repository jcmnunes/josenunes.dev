import { updateIntl } from 'react-intl-redux';
import { saveItem } from '/utils/localStorage';
import enStrings from '/locales/en-us/translation.json';
import ptStrings from '/locales/pt/translation.json';

export default locale => dispatch => {
  let messages;
  switch (locale) {
    case 'en':
      messages = enStrings;
      break;
    case 'pt':
      messages = ptStrings;
      break;
    default:
      messages = enStrings;
  }
  dispatch(updateIntl({ locale, messages }));
  saveItem('jn_language', locale);
};
