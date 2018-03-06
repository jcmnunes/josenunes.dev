import React from 'react';
import classNames from 'classnames';
import styles from './Buttons.css';

export const Btn = ({ block, kind, large, ...props }) => {
  const classes = classNames(styles.btn, kind, block, large);
  return <button {...props} className={classes} />;
};

export const FlatBtn = props => <Btn {...props} />;

export const PrimaryBtn = props => <Btn {...props} kind={styles.primary} />;

export const PrimaryLargeBtn = props =>
  <Btn {...props} kind={styles.primary} large={styles.large} />;
