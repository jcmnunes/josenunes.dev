import React from 'react';
import FooterMe from './FooterMe';
import Techs from './Techs';
import PatternsPub from './PatternsPub';
import styles from './Footer.css';

const Footer = () =>
  <div className={`${styles.root} container`}>
    <FooterMe />
    <div className={styles.logos}>
      <Techs />
      <PatternsPub />
    </div>
  </div>;

// // Props validation
// Footer.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default Footer;
