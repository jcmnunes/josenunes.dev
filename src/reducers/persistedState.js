import initialState from '/reducers/initialState';
import { loadItem } from '/utils/localStorage';
import enStrings from '/locales/en-us/translation.json';
import ptStrings from '/locales/pt/translation.json';

let locale = loadItem('jn_language') || 'en';
locale = 'pt';
let messages;

switch (locale) {
  case 'en':
    messages = enStrings;
    break;
  case 'pt':
    messages = ptStrings;
    break;
  default:
    locale = 'en';
    messages = enStrings;
    break;
}

export default { intl: { ...initialState.intl, locale, messages } };
