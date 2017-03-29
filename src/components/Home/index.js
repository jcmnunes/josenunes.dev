import React from 'react';
import NavBar from '/components/common/NavBar';
import Heros from './Heros';
import Footer from '/components/common/Footer';
import Hamburger from '/components/common/Hamburger';
import styles from './Home.css';

const Home = () =>
  <div className={styles.root}>
    <Hamburger />
    <NavBar />
    <Heros />
    <Footer />
  </div>;

export default Home;
