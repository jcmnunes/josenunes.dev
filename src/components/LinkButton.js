import React, { Component } from 'react';
import styled from 'styled-components';
import iconCheveronRight from '../images/icon-cheveron-right.svg';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.neutral200};

  .cheveron {
    transition: all 0.2s ease;
  }

  &:hover {
    .cheveron {
      transform: translateX(5px);
    }
  }

  img {
    width: 24px;
    margin-bottom: 0;
  }

  .button-text {
    font-size: ${props => (props.large ? '16px' : '14px')};
    margin-left: ${props => (props.icon ? '16px' : 0)};
    margin-right: 4px;
  }
`;

class LinkButton extends Component {
  render() {
    const { icon, iconAltText, children, ...rest } = this.props;
    return (
      <StyledLink {...rest} icon={icon !== undefined}>
        {icon && <img src={icon} alt={iconAltText} />}
        <span className="button-text">{children}</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </StyledLink>
    );
  }
}

export default LinkButton;
