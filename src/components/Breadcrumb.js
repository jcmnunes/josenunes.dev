import React, { Component } from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';

import TransitionLink from './TransitionLink';

const StyledBreadcrumb = styled.div`
  a {
    color: ${props => props.theme.neutral300};
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
`;

class Breadcrumb extends Component {
  parseLocation = location => {
    if (location.pathname === '/') {
      return (
        <span>
          / <TransitionLink to="/">Home</TransitionLink>{' '}
        </span>
      );
    }
    const urlArray = location.pathname.split('/');
    return urlArray.map((item, index) => {
      if (item.length !== 0) {
        const path = urlArray.slice(0, index + 1).join('/');
        return (
          <span key={`${item}${index}`}>
            / <TransitionLink to={path}>{item}</TransitionLink>{' '}
          </span>
        );
      }
      return null;
    });
  };
  render() {
    return (
      <StyledBreadcrumb>
        <Location>{({ location }) => this.parseLocation(location)}</Location>
      </StyledBreadcrumb>
    );
  }
}

export default Breadcrumb;
