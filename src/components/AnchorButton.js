import React, { Component } from 'react';
import styled from 'styled-components';
import iconCheveronRight from '../images/icon-cheveron-right.svg';

const StyledAnchor = styled.a`
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

  span {
    font-size: 14px;
    margin-left: 16px;
    margin-right: 4px;
  }

  img {
    width: 24px;
    margin-bottom: 0;
  }
`;

class AnchorButton extends Component {
  render() {
    const { icon, iconAltText, children, ...rest } = this.props;
    return (
      <StyledAnchor {...rest}>
        {icon && <img src={icon} alt={iconAltText} />}
        <span className="button-text">{children}</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </StyledAnchor>
    );
  }
}

export default AnchorButton;
