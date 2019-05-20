import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PrimaryButton from '../styles/PrimaryButton';
import { Location } from '@reach/router';

const StyledBlogLink = styled(Link)`
  position: absolute;
  top: 96px;
  right: 32px;

  @media (max-width: ${props => props.theme.bp_small}) {
    top: 64px;
  }
`;

const BlogLink = () => {
  const getButtonText = location => {
    if (location.pathname === '/blog') {
      return 'home';
    }
    return 'blog';
  };

  const getToUrl = location => {
    if (location.pathname === '/blog') {
      return '/';
    }
    return '/blog';
  };

  return (
    <Location>
      {({ location }) => (
        <StyledBlogLink to={getToUrl(location)}>
          <PrimaryButton>{getButtonText(location)}</PrimaryButton>
        </StyledBlogLink>
      )}
    </Location>
  );
};

export default BlogLink;
