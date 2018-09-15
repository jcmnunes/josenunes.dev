import React from 'react';
import FooterMe from '../components/common/FooterMe';

import styles from './index.module.scss';

export default () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <div className={styles.container}>Header</div>
    </div>
    <div className={styles.body} />
    <div className={styles.footer}>
      <div className={styles.container}>
        <FooterMe />
      </div>
    </div>
  </div>
);
