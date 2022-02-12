import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Skills } from '../features/Skills/Skills';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | About</title>
      </Head>

      <Skills />
    </div>
  );
};

export default About;
