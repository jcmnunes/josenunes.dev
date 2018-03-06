import React from 'react';
import FooterMe from './FooterMe';
import Techs from './Techs';
import TechsMobile from './TechsMobile';
import PatternsPub from './PatternsPub';
import styles from './Footer.css';

const Footer = ({ home }) => (
  <div className={`${styles.root} ${home && styles.home}`}>
    <div className={`${styles.container} container`}>
      <FooterMe />
      <div className={styles.logos}>
        <Techs />
        <PatternsPub />
      </div>
      <TechsMobile />
    </div>
  </div>
);

// // Props validation
// Footer.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default Footer;
