import React from 'react';
import NavBar from '/components/NavBar';
import Hero from '/components/Home/Hero';
import Footer from '/components/Footer';
import styles from './Home.css';

const Home = () =>
  <div className={styles.root}>
    <NavBar />
    <Hero />
    <Footer />
  </div>;

export default Home;
