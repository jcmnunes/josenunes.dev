import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import NavIcons from './NavIcons';
import Hamburger from '/components/common/Hamburger';
import styles from './NavBar.css';

const NavBar = () =>
  <div className={`${styles.root} container`}>
    <Logo />
    <div className={styles.menu}>
      <Nav />
      <NavIcons />
    </div>
    <Hamburger />
  </div>;

export default NavBar;
