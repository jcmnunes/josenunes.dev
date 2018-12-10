import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import HeroCard from '../styles/HeroCard';

const H2 = styled.h2`
  color: ${props => props.theme.white};
`;

export default () => (
  <Layout>
    <HeroCard>
      <H2>Resume</H2>
    </HeroCard>
  </Layout>
);
