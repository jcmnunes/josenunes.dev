import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';

import HeroCard from '../styles/HeroCard';
import Profile from '../styles/Profile';
import Button from '../components/UI/Button/Button';
import FooterButtons from '../styles/FooterButtons';

const H2 = styled.h2`
  color: ${props => props.theme.white};
`;

const Entries = styled.div`
  margin-bottom: 20px;
`;

const Entry = styled.div`
  span {
    color: ${props => props.theme.primary};
    font-weight: bold;
  }
`;

const entries = [
  {
    id: 'name',
    name: 'Name',
    value: 'Jose Nunes',
  },
  {
    id: 'nationality',
    name: 'Nationality',
    value: 'Portuguese',
  },
  {
    id: 'residence',
    name: 'Residence',
    value: 'Aveiro, Portugal',
  },
  {
    id: 'job',
    name: 'Job',
    value: 'Frontend developer',
  },
  {
    id: 'workstatus',
    name: 'Work status',
    value: 'Frontend developer @ adidas',
  },
  {
    id: 'email',
    name: 'Email',
    value: 'jn@josenunes.xyz',
  },
];

export default () => (
  <Layout>
    <HeroCard>
      <Profile />
      <H2>About Me</H2>
      <Entries>
        {entries.map(({ id, name, value }) => (
          <Entry key={id}>
            <span>{name}:</span> {value}
          </Entry>
        ))}
      </Entries>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque facere illum voluptas.
        Accusamus beatae cupiditate, doloremque earum eligendi, eum, eveniet fugiat hic magni modi
        nemo nobis optio porro quaerat quidem!
      </p>
      <FooterButtons>
        <Button intent="primary">Download my CV</Button>
        <Button>My Skills</Button>
      </FooterButtons>
    </HeroCard>
  </Layout>
);
