import React from 'react';
import Logo from '/components/NavBar/Logo';
// import Nav from '/components/navbar/Nav';
// import NavIcons from '/components/navbar/NavIcons';
import styles from './NavBar.css';

/**
 * ESDoc comment.
 */
const NavBar = () =>
  <div className={`${styles.root} container`}>
    <Logo />
    {/* <div className={styles.menu}>
      <Nav />
      <NavIcons />
    </div> */}
  </div>;

// // Props validation
// NavBar.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default NavBar;
