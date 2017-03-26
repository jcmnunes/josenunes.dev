import React from 'react';
import FooterMe from './FooterMe';
import styles from './Footer.css';

const Footer = () =>
  <div className={`${styles.root} container`}>
    <FooterMe />
  </div>;

// // Props validation
// Footer.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default Footer;
