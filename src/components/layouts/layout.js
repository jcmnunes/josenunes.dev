import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import Nav from '../Nav';
import Logo from '../Logo';

import theme from '../../styles/theme';
import Container from '../../styles/Container';
import Header from '../../styles/Header';
import Main from '../../styles/Main';
import Footer from '../../styles/Footer';
import IconLinks from '../../styles/IconLinks';

import GithubIcon from '../../images/github';
import LinkedInIcon from '../../images/linkedin';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              id
              name
              link
            }
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
              <Logo />
              <Nav menuLinks={data.site.siteMetadata.menuLinks} />
            </Header>
            <Main>{children}</Main>
            <Footer>
              <div>Copyright © 2018 Jose Nunes</div>
              <IconLinks>
                Follow Me:
                <GithubIcon />
                <LinkedInIcon />
              </IconLinks>
            </Footer>
          </Container>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
