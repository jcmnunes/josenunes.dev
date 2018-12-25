import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Logo from '../Logo';

import theme from '../../styles/theme';
import Container from '../../styles/Container';
import Header from '../../styles/Header';
import Main from '../../styles/Main';
import GlobalStyle from '../../styles/Global';

const Homepage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Container>
            <Header>
              <Logo icon />
            </Header>
            <Main>{children}</Main>
            <GlobalStyle />
          </Container>
        </ThemeProvider>
      </>
    )}
  />
);

Homepage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Homepage;
