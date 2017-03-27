import React from 'react';
import { languages } from '/jn.config';
import { connect } from 'react-redux';
import changeLanguage from '/actions/intl';
import styles from './LangMenu.css';

export const LangMenu = props => {
  const renderSeparator = index => index !== (languages.length - 1) &&
    <span style={{ margin: 5 }}>|</span>;

  const renderItem = (code, name, index) =>
    <li key={code}>
      <span
        onClick={() => props.changeLanguage(code)}
        className={`${props.locale === code && styles.active}`}>
        {name}
      </span>
      {renderSeparator(index)}
    </li>;

  return (
    <ul className={`${styles.root}`}>
      {languages.map((lang, index) => renderItem(lang.code, lang.name, index))}
    </ul>
  );
};

const mapStateToProps = state => ({
  locale: state.intl.locale,
});

export default connect(mapStateToProps, { changeLanguage })(LangMenu);
