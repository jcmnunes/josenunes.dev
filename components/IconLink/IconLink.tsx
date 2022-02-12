import React, { ComponentPropsWithoutRef } from 'react';
import styles from './IconLink.module.scss';

interface Props extends ComponentPropsWithoutRef<'a'> {}

export const IconLink: React.FC<Props> = props => {
  return <a target="_blank" rel="noreferrer noopener" {...props} className={styles.link} />;
};
