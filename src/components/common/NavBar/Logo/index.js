import React from 'react';
import { Link } from 'react-router';
import styles from './Logo.css';

/**
 * ESDoc comment.
 */
const Logo = () => (
  <div className={styles.root}>
    <Link to="/" className={styles.link}>Jose Nunes</Link>
  </div>
);

// Default props
Logo.defaultProps = {
  firstName: 'John',
  lastName: 'Doe',
};

// Props validation
Logo.propTypes = {
  firstName: React.PropTypes.string.isRequired,
  lastName: React.PropTypes.string.isRequired,
};

export default Logo;
