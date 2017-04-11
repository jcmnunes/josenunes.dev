import React from 'react';
import { connect } from 'react-redux';
import { pages } from '/jn.config';
import styles from './nav.css';

const Nav = ({ strings }) =>
  <div className={styles.root}>
    {
      pages.map(page =>
        <a
          key={page.name}
          className={styles.item}
          alt={strings[page.name]}
        >
          {strings[page.name]}
        </a>,
      )
    }
  </div>;

Nav.propTypes = {
  strings: React.PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
  strings: state.intl.messages.navbar,
});

export default connect(mapStateToProps)(Nav);
