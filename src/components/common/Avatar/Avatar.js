import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AvatarSvg from './images/avatar.svg';

/**
 * Renders an avatar image tag.
 *
 * @param {object} props
 * @param {number} props.width - Avatar width (px)
 * @param {number} props.height - Avatar height (px)
 */
class Avatar extends Component {
  render() {
    const { width, height } = this.props;

    return <img src={AvatarSvg} alt="Avatar" width={`${width}px`} height={`${height}px`} />;
  }
}

Avatar.defaultProps = {
  width: 45,
  height: 45,
};

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Avatar;
