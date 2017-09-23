import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

const Icon = props => {
  const style = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={style.svg}
      className={`${styles.svg} ${props.spin && styles.spin}`}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path style={styles.path} d={props.icon} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 20,
  color: '#000',
  spin: false,
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  spin: PropTypes.bool,
};

export default Icon;
