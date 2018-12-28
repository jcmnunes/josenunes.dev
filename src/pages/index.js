import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import Manifest from '../components/Manifest';
import List from '../components/List';
import Contact from '../components/Contact';

import Heading from '../styles/Heading';
import TwoColumnGrid from '../styles/TwoColumnGrid';

import worksData from '../content/works';
import projectsData from '../content/projects';

const H1 = styled.h1`
  color: ${props => props.theme.neutral100};
  font-size: 36px;

  span {
    color: ${props => props.theme.primary500};
  }
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.neutral100};
`;

const AboutLink = styled(Link)`
  color: ${props => props.theme.neutral100};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.primary500};
  }
`;

export default () => (
  <Layout>
    <H2>
      Hello, <br /> I Am <AboutLink to="/about">Jose Nunes</AboutLink>
    </H2>
    <H1>
      <span>Frontend</span> Developer
    </H1>
    <Manifest />
    <TwoColumnGrid>
      <div>
        <Heading>Recent Work Experiences</Heading>
        <List data={worksData} />
      </div>
      <div>
        <div style={{ marginBottom: 48 }}>
          <Heading>Recent Projects</Heading>
          <List data={projectsData} />
        </div>
        <Contact />
      </div>
    </TwoColumnGrid>
  </Layout>
);
