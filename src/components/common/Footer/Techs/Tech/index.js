/* eslint-disable import/no-dynamic-require */
import React from 'react';
import styles from './Tech.css';

/**
 * ESDoc comment.
 */
const Tech = ({ name, img, link, width, sty, mobile }) =>
  <a
    href={link}
    className={`
      ${styles.root}
      ${mobile && styles.mobile}
    `}
    style={sty}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles.tech}>
      <img
        style={{ width }}
        src={require(`../images/${img}.svg`)}
        alt={name}
      />
    </div>
    <div className={styles.name}>{name}</div>
  </a>;

export default Tech;
