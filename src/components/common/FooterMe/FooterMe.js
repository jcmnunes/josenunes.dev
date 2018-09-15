import React, { Component } from 'react';
import Avatar from '../Avatar';

import styles from './FooterMe.module.scss';

class FooterMe extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.info}>
          <div>
            <div className={styles.name}>Jose Nunes</div>
            <div className={styles.job}>Frontend developer</div>
          </div>
          <Avatar />
        </div>
        <div className={styles.footer}>Made in Coimbra, Portugal | Copyright © 2017</div>
      </div>
    );
  }
}

export default FooterMe;
