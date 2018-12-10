import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { shade } from 'polished';

const StyledButton = styled.button`
  background-color: ${props => {
    switch (props.intent) {
      case 'primary':
        return props.theme.primary;
      default:
        return props.theme.default;
    }
  }};
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0));
  border-radius: 3px;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  min-height: 30px;
  min-width: 30px;
  padding: 5px 10px;
  text-transform: uppercase;
  white-space: nowrap;

  :hover {
    background-color: ${shade(0.1, '#f45c43')};
    background-color: ${props => {
      let color;
      switch (props.intent) {
        case 'primary':
          color = props.theme.primary;
          break;
        default:
          color = props.theme.default;
          break;
      }
      return shade(0.1, color);
    }};
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
  }

  :active {
    background-color: ${props => {
      let color;
      switch (props.intent) {
        case 'primary':
          color = props.theme.primary;
          break;
        default:
          color = props.theme.default;
          break;
      }
      return shade(0.2, color);
    }};
    background-image: none;
    box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
  }

  :focus {
    // TODO: Implement the FocusStyleManager
    outline: none !important;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.action} intent={this.props.intent}>
        {this.props.children}
      </StyledButton>
    );
  }
}

Button.defaultProps = {
  intent: '',
};

Button.propTypes = {
  intent: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
