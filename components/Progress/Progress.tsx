import React from 'react';
import { motion } from 'framer-motion';
import styles from './Progress.module.scss';

const spring = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
};

interface Props {
  progress: number;
}

export const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <div className={styles.wrapper} aria-label={`${progress}%`}>
      <motion.div
        transition={spring}
        className={styles.progress}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
      />
    </div>
  );
};
