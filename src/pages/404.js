import React, { Component } from 'react';
import styled from 'styled-components';

import LinkButton from '../components/LinkButton';

const StyledNotFound = styled.div`
  h1 {
    font-size: 72px;
    color: ${props => props.theme.neutral100};
  }

  h2 {
    font-size: 24px;
    color: ${props => props.theme.primary500};
    font-weight: 400;
  }
`;

class NotFound extends Component {
  render() {
    return (
      <>
        <StyledNotFound>
          <h1>404</h1>
          <h2>Page not found</h2>
          <LinkButton to="/">Back to home</LinkButton>
        </StyledNotFound>
      </>
    );
  }
}

export default NotFound;
