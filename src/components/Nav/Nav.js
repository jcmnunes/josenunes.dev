import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.ul`
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 35px 50px;
`;

const NavLink = styled(Link)`
  background: ${props => props.active && props.theme.primary};
  color: ${props => props.theme.white};
  cursor: pointer;
  display: inline;
  font-size: 16px;
  list-style-type: none;
  min-height: 30px;
  min-width: 30px;
  padding: 10px 15px;

  :hover,
  &.active {
    color: ${props => props.theme.white};
    text-decoration: none;
    background: ${props => props.theme.primary};
  }
`;

class Nav extends Component {
  render() {
    return (
      <nav>
        <StyledNav>
          {this.props.menuLinks.map(menuLink => (
            <NavLink key={menuLink.id} to={menuLink.link} activeClassName="active">
              {menuLink.name}
            </NavLink>
          ))}
        </StyledNav>
      </nav>
    );
  }
}

export default Nav;
