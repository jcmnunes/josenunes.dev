import React from 'react';
import NavBar from '/components/common/NavBar';
import Heros from './Heros';
import Footer from '/components/common/Footer';
import styles from './Home.css';

const Home = () =>
  <div className={styles.root}>
    <NavBar />
    <Heros />
    <Footer />
  </div>;

export default Home;
