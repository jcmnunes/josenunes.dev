import React from 'react';
import Avatar from '/components/common/Avatar';
import Copyright from '/components/common/Copyright';
import styles from './FooterMe.css';

const FooterMe = () =>
  <div className={styles.root}>
    <div className={styles.main}>
      <div className={styles.name}>
        <h1>Jose Nunes, PhD</h1>
        <h2>Engineer and Tech Savvy</h2>
      </div>
      <Avatar styles={{ width: 40, height: 40 }} />
    </div>
    <div className={styles.footer}>
      <span className={styles.madeIn}>Made in Coimbra, Portugal</span>
      <Copyright fontSize={7} year={2017} />
    </div>
  </div>;

// // Props validation
// FooterMe.propTypes = {
//   firstName: React.PropTypes.string.isRequired,
//   lastName: React.PropTypes.string.isRequired,
// };

export default FooterMe;
