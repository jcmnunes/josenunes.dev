/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styles from './Tech.css';

/**
 * ESDoc comment.
 */
const Tech = ({ name, img, width, sty }) =>
  <span className={styles.root} style={sty}>
    <div className={styles.tech}>
      <img
        style={{ width }}
        src={require(`../images/${img}.svg`)}
        alt={name}
      />
    </div>
    <div className={styles.name}>{name}</div>
  </span>;

export default Tech;
