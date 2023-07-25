import React, { ComponentPropsWithoutRef } from 'react';
import styles from './SecondaryButton.module.scss';

interface Props extends ComponentPropsWithoutRef<'button'> {}

export const SecondaryButton = (props: Props) => {
  return (
    <button className={styles.button} {...props} />
  );
};
