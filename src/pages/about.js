import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Skill from '../components/Skill';
import List from '../components/List';
import Contact from '../components/Contact';

import Heading from '../styles/Heading';
import Paragraph from '../styles/Paragraph';
import Primary from '../styles/Primary';
import TwoColumnGrid from '../styles/TwoColumnGrid';
import TerciaryButton from '../styles/TerciaryButton';

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

  @media (max-width: ${props => props.theme.bp_medium}) {
    h2 {
      font-size: 20px;
    }

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    h2 {
      font-size: 16px;
    }

    h1 {
      font-size: 20px;
    }
  }
`;

const Avatar = styled.span`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.neutral700};
  border-radius: 50%;
  margin-right: 24px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.bp_medium}) {
    width: 75px;
    height: 75px;
  }

  @media (max-width: ${props => props.theme.bp_small}) {
    width: 60px;
    height: 60px;
    margin-right: 16px;
  }
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

const recentCourses = coursesData.slice(0, 4);

export default ({ data }) => (
  <>
    <AboutCard>
      <Avatar>
        <Img fluid={data.profile.childImageSharp.fluid} />
      </Avatar>
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
      Hi, my name is Jose Nunes, I'm a (<Primary>React</Primary>) frontend developer from Portugal.
      I love working for the web and I'm a big fan of React and all the React ecosystem.
    </Paragraph>
    <Paragraph>
      Although I started my IT career as a Python developer, I’ve been working as a frontend
      developer for the past 3 years. My initial tech stack was focused on vanilla JavaScript and
      jQuery. Nowadays, I work mainly with modern frontend web technologies in the React ecosystem.
      In fact, I’ve been working as a React developer for more than two years now.
    </Paragraph>
    <Contact />
    <Heading>Skills</Heading>
    <Skills>
      {skillsData.map(skill => (
        <Skill key={skill.key} name={skill.name} value={skill.value} />
      ))}
    </Skills>
    <TwoColumnGrid>
      <div>
        <Heading>Recent courses I took</Heading>
        <List data={recentCourses} />
        <TerciaryButton onClick={() => navigate('/courses')}>Show all courses ➜</TerciaryButton>
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
  </>
);

export const query = graphql`
  query aboutPage {
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
