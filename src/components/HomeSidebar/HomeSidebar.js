import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../svg/Logo';
import LogoText from '../../svg/LogoText';

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px 20px;
  flex: 1;
  background: ${props => props.theme.gray1};
  height: 100%;
`;

const StyledLogo = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  grid-gap: 10px;
  align-items: center;
`;

const Copyright = styled.div`
  color: ${props => props.theme.white};
  font-size: 16px;
`;

class HomeSidebar extends Component {
  render() {
    return (
      <Sidebar>
        <StyledLogo>
          <Logo />
          <LogoText />
        </StyledLogo>
        <Copyright>Copyright © 2018 Jose Nunes</Copyright>
      </Sidebar>
    );
  }
}

export default HomeSidebar;
