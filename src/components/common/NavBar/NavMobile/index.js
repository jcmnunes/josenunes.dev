import React from 'react';
import { connect } from 'react-redux';
import NavIcons from '../NavIcons';
import { pages } from '/jn.config';
import styles from './NavMobile.css';

const NavMobile = ({ strings, open }) =>
  <div
    className={`
      ${styles.root}
      ${open && styles.open}
    `}>
    <ul className={styles.list}>
      {
        pages.map(page =>
          <li key={page.name} className={styles.item}>
            {strings[page.name]}
          </li>,
        )
      }
    </ul>
    <NavIcons sty={{ justifyContent: 'center' }} />
  </div>;

NavMobile.propTypes = {
  strings: React.PropTypes.object.isRequired,
};

export const mapStateToProps = state => ({
  strings: state.intl.messages.navbar,
  open: state.global.menuOpen,
});

export default connect(mapStateToProps)(NavMobile);
