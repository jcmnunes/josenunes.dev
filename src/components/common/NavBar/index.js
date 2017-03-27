import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavIcons from './NavIcons';
import styles from './NavBar.css';

/**
 * ESDoc comment.
 */
const NavBar = () =>
  <div className={`${styles.root} container`}>
    <Logo />
    <div className={styles.menu}>
      <Nav />
      <NavIcons />
    </div>
  </div>;

export default NavBar;
