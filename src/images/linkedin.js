import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ({ color, width, height }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55">
      <path
        fill={color}
        d="M27.5,0A27.5,27.5,0,1,0,55,27.5,27.5,27.5,0,0,0,27.5,0ZM20.1,40.2H14.9V23.4h5.2Zm0-22.55A2.62,2.62,0,0,1,17.3,20.1H17a2.47,2.47,0,0,1-2.33-2.6v-.21a2.56,2.56,0,0,1,2.7-2.39h.33A2.49,2.49,0,0,1,20.1,17.5.76.76,0,0,1,20.09,17.65Zm20,22.55H34.9V30.6c0-2.3-1.2-3.5-3.3-3.5a3.08,3.08,0,0,0-2.9,2.1,3.18,3.18,0,0,0-.2,1.4v9.7H23.2s.1-15.3,0-16.9h5.2v2.2a5.69,5.69,0,0,1,5.2-2.9c3.7,0,6.5,2.4,6.5,7.7Z"
      />
    </svg>
  );
};

LinkedIn.defaultProps = {
  color: 'currentColor',
  height: 20,
  width: 20,
};

LinkedIn.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default LinkedIn;
