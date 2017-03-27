import React from 'react';
import Logo from '/components/NavBar/Logo';
import Nav from '/components/NavBar/Nav';
import NavIcons from '/components/NavBar/NavIcons';
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
