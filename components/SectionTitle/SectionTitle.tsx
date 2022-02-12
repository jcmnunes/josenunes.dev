import React from 'react';
import styles from './SectionTitle.module.scss';

export const SectionTitle: React.FC = ({ children }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};
