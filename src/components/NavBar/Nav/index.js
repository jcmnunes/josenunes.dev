import React from 'react';
import { pages } from '/jn.config';
import styles from './nav.css';

const Nav = () =>
  <ul className={styles.root}>
    {
      pages.map(page =>
        <li
          key={page.name}
          className={styles.item}
        >
          {page.name}
        </li>,
      )
    }
  </ul>;

// // Default props
// Nav.defaultProps = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
//
// // Props validation
// Nav.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default Nav;
