import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const StyledBreadcrumb = styled.div`
  flex: 1 0 auto;

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
          / <Link to="/">Home</Link>{' '}
        </span>
      );
    }
    const urlArray = location.pathname.split('/');
    return urlArray.map((item, index) => {
      if (item.length !== 0) {
        const path = urlArray.slice(0, index + 1).join('/');
        return (
          <span key={`${item}${index}`}>
            / <Link to={path}>{item}</Link>{' '}
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
