import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Layout from '../components/layouts/layout';
import HeroCard from '../styles/HeroCard';
import FooterButtons from '../styles/FooterButtons';
import Button from '../components/UI/Button/Button';

import data from '../data/homepage';

const H1 = styled.h1`
  color: ${props => props.theme.white};

  span {
    color: ${props => props.theme.primary};
  }
`;

const H2 = styled.h2`
  color: ${props => props.theme.white};
`;

export default () => (
  <Layout>
    <HeroCard>
      <H2>
        Hello, <br /> I Am Jose Nunes
      </H2>
      <H1>
        <span>Frontend</span> Developer
      </H1>
      <p>{data.message}</p>
      <FooterButtons>
        <Button intent="primary" action={() => navigate('/about')}>
          About me
        </Button>
        <Button action={() => navigate('/resume')}>Resume</Button>
      </FooterButtons>
    </HeroCard>
  </Layout>
);
