import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import Skill from '../components/Skill';
import List from '../components/List';

import Heading from '../styles/Heading';
import Paragraph from '../styles/Paragraph';
import TwoColumnGrid from '../styles/TwoColumnGrid';

import avatar from '../images/avatar.jpg';

import coursesData from '../content/courses';
import articlesData from '../content/articles';
import skillsData from '../content/skills';

const AboutCard = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.neutral100};
  margin-bottom: 36px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .primary {
    color: ${props => props.theme.primary500};
  }
`;

const Avatar = styled.span`
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.neutral700};
  border-radius: 50%;
  background-image: url('${avatar}');
  background-size: cover;
  margin-right: 24px;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px 64px;
  margin-bottom: 64px;

  @media (max-width: ${props => props.theme.bp_small}) {
    grid-template-columns: 1fr;
  }
`;

export default () => (
  <Layout>
    <AboutCard>
      <Avatar />
      <div>
        <h2>
          Hello,
          <br />
          I'm Jose Nunes
        </h2>
        <h1>
          <span className="primary">Frontend</span> Developer
        </h1>
      </div>
    </AboutCard>
    <Paragraph>
      Being a developer for 6 years now, I stumbled across several challenging and interesting
      projects. As a React developer, I'm constantly trying to improve and to learn new things.
    </Paragraph>
    <Heading>Skills</Heading>
    <Skills>
      {skillsData.map(skill => (
        <Skill name={skill.name} value={skill.value} />
      ))}
    </Skills>
    <TwoColumnGrid>
      <div>
        <Heading>Recent courses</Heading>
        <List data={coursesData} />
      </div>
      <div>
        <Heading>
          Recent articles I{' '}
          <span role="img" aria-label="heart-eyes-emoji">
            😍
          </span>
        </Heading>
        <List data={articlesData} />
      </div>
    </TwoColumnGrid>
  </Layout>
);
