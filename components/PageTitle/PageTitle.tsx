import React from 'react';
import styles from './PageTitle.module.scss';

export const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
};
