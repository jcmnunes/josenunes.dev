import React from 'react';
import NavBar from '/components/NavBar';
import Heros from '/components/Home/Heros';
import Footer from '/components/Footer';
import styles from './Home.css';

const Home = () =>
  <div className={styles.root}>
    <NavBar />
    <Heros />
    <Footer />
  </div>;

export default Home;
