import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import Hero from '../components/Hero';
import Sidebar from '../components/HomeSidebar';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 75%;
  max-width: 75%;
  background: ${props => props.theme.gray2};
`;

export default () => (
  <Layout>
    <Container>
      <Sidebar />
      <Main>
        <Hero />
      </Main>
    </Container>
  </Layout>
);
