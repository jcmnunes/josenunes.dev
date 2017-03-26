import React from 'react';
import styles from './Copyright.css';

const Copyright = ({ fontSize, year }) =>
  <span className={styles.root} style={{ fontSize }}>
    Copyright &copy; {`${year}`}
  </span>;

// Default props
Copyright.defaultProps = {
  fontSize: 10,
};

// Props validation
Copyright.propTypes = {
  fontSize: React.PropTypes.number,
  year: React.PropTypes.number.isRequired,
};

export default Copyright;
