import React, { Component } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import LogoIcon from '../../images/LogoIcon';
import LogoText from '../../images/LogoText';

const StyledLogo = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 10px;
  align-items: center;
  cursor: pointer;
`;

class Logo extends Component {
  goToHomepage = () => {
    console.log('Hello');
    navigate('/');
  };

  render() {
    return (
      <StyledLogo onClick={this.goToHomepage}>
        <LogoIcon />
        <LogoText />
      </StyledLogo>
    );
  }
}

export default Logo;