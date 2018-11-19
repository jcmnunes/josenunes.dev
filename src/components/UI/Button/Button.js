import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
  background: #f45c43 linear-gradient(180deg, hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0));
  color: #fff;
  justify-content: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 10px;
  vertical-align: middle;
  text-align: left;
  font-size: 14px;
  min-width: 30px;
  min-height: 30px;

  :hover {
    background-color: #eb3349;
  }

  :focus {
    outline: none !important;
  }
`;

class ButtonComponent extends Component {
  render() {
    return <Button>Click me</Button>;
  }
}

export default ButtonComponent;
