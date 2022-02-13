import React from 'react';
import styles from './Columns.module.scss';

export const Columns: React.FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
