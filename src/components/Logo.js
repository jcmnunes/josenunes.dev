import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import LogoIcon from '../images/LogoIcon';
import LogoText from '../images/LogoText';

const StyledLogo = styled(Link)`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const Logo = ({ icon, text }) => (
  <StyledLogo to="/">
    {icon && <LogoIcon />}
    {text && <LogoText />}
  </StyledLogo>
);

Logo.defaultProps = {
  icon: false,
  text: false,
};

Logo.propTypes = {
  icon: PropTypes.bool,
  text: PropTypes.bool,
};

export default Logo;
