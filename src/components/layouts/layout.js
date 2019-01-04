import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import posed from 'react-pose';
import { TransitionState } from 'gatsby-plugin-transition-link';

import Logo from '../Logo';
import Breadcrumb from '../Breadcrumb';

import theme from '../../styles/theme';
import Container from '../../styles/Container';
import Header from '../../styles/Header';
import Main from '../../styles/Main';
import GlobalStyle from '../../styles/Global';

// Pose for page transitions
export const SlideUp = posed.div({
  hidden: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 200,
      ease: 'easeIn',
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 200,
      ease: 'easeOut',
    },
  },
});

const TransitionWrapper = ({ children }) => (
  <TransitionState>
    {({ transitionStatus }) => (
      <SlideUp pose={['entering', 'entered'].includes(transitionStatus) ? 'visible' : 'hidden'}>
        {children}
      </SlideUp>
    )}
  </TransitionState>
);

const Layout = ({ children }) => (
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
          <TransitionWrapper>
            <Container>
              <Header>
                <Logo icon />
                <Breadcrumb />
              </Header>
              <Main>{children}</Main>
              <GlobalStyle />
            </Container>
          </TransitionWrapper>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
