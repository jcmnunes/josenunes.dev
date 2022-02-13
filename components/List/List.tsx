import React from 'react';
import styles from './List.module.scss';

export const List: React.FC = ({ children }) => {
  return <ul className={styles.wrapper}>{children}</ul>;
};
