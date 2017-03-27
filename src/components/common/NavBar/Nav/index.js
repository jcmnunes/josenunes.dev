import React from 'react';
import { connect } from 'react-redux';
import { pages } from '/jn.config';
import styles from './nav.css';

const Nav = ({ strings }) =>
  <ul className={styles.root}>
    {
      pages.map(page =>
        <li key={page.name} className={styles.item}>
          {strings[page.name]}
        </li>,
      )
    }
  </ul>;

Nav.propTypes = {
  strings: React.PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
  strings: state.intl.messages.navbar,
});

export default connect(mapStateToProps)(Nav);
