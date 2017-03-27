import React from 'react';
import Tech from '../Techs/Tech';
import styles from './PatternsPub.css';

const PatternsPub = () =>
  <div className={styles.root}>
    <h1>
      Patterns from:
    </h1>
    <div className={styles.techs}>
      <Tech
        sty={{ marginRight: 0 }}
        name="Subtle patterns"
        img={'subtle'}
        width={30}
      />
    </div>
  </div>;

export default PatternsPub;
