import React from 'react';
import styles from './PageSubTitle.module.scss';

export const PageSubTitle: React.FC = ({ children }) => {
  return <h2 className={styles.pageSubTitle}>{children}</h2>;
};
