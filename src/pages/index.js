import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Manifest from '../components/Manifest';
import List from '../components/List';
import Contact from '../components/Contact';

import H1 from '../styles/H1';
import Heading from '../styles/Heading';
import TwoColumnGrid from '../styles/TwoColumnGrid';
import Paragraph from '../styles/Paragraph';

import worksData from '../content/works';
import projectsData from '../content/projects';

const H2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.neutral100};
`;

const AboutLink = styled(Link)`
  color: ${props => props.theme.neutral100};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary500};

  &:hover {
    text-decoration-color: ${props => props.theme.primary500};
  }
`;

const Home = () => (
  <>
    <H2>
      Hello, <br /> I'm <AboutLink to="/about">Jose Nunes</AboutLink>
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
          <Paragraph style={{ fontSize: 14 }}>
            Some of the projects I maintain during my free time (breakable toys):
          </Paragraph>
          <List data={projectsData} />
        </div>
        <Contact socialLinks />
      </div>
    </TwoColumnGrid>
  </>
);

export default Home;
