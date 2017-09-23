import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { pages } from '/jn.config';
import styles from './nav.css';

const Nav = ({ strings }) =>
  <div className={styles.root}>
    {pages.map(page =>
      <Link
        key={page.name}
        className={styles.item}
        activeClassName={styles.active}
        alt={strings[page.name]}
        to={page.name}
      >
        {strings[page.name]}
      </Link>,
    )}
  </div>;

Nav.propTypes = {
  strings: React.PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
  strings: state.intl.messages.navbar,
});

export default connect(mapStateToProps)(Nav);
