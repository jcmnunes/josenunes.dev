import React from 'react';
import styles from './Logo.css';

/**
 * ESDoc comment.
 */
const Logo = () => <div className={styles.root}>Jose Nunes</div>;

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
