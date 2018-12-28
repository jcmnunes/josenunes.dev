import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import iconCheveronRight from '../images/icon-cheveron-right.svg';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.neutral200};

  .cheveron {
    transition: all 0.2s ease;
  }

  &:hover {
    text-decoration: none;

    .cheveron {
      transform: translateX(5px);
    }
  }

  span {
    font-size: 16px;
    margin-left: 0;
    margin-right: 4px;
  }

  img {
    width: 24px;
    margin-bottom: 0;
  }
`;

class LinkButton extends Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <StyledLink {...rest}>
        <span className="button-text">{children}</span>
        <img className="cheveron" src={iconCheveronRight} alt="icon-cheveron-right" />
      </StyledLink>
    );
  }
}

export default LinkButton;
