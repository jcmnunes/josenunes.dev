import React from 'react';

/**
 * ESDoc comment.
 */
const Avatar = ({ styles }) =>
  <img
    style={styles}
    src={require('./images/avatar.svg')} alt="avatar"
  />;

Avatar.defaultProps = {
  styles: { width: 30, height: 30 },
};

Avatar.propTypes = {
  styles: React.PropTypes.object,
};

export default Avatar;
