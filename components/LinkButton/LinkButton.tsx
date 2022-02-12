import React, { ComponentPropsWithoutRef } from 'react';
import styles from './LinkButton.module.scss';
import { ChevronRightIcon } from '@heroicons/react/solid';

interface Props extends ComponentPropsWithoutRef<'span'> {
  icon: React.ReactElement;
}

export const LinkButton: React.FC<Props> = ({ icon, children, ...rest }) => {
  return (
    <span className={styles.wrapper} {...rest}>
      {icon}

      <span className={styles.text}>{children}</span>

      <ChevronRightIcon width={18} />
    </span>
  );
};
