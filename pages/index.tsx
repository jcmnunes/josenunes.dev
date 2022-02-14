import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Head } from '../components/Head/Head';
import { Works } from '../features/Works/Works';
import Projects from '../features/Projects/Projects';
import { VCard } from '../features/VCard/VCard';
import { Columns } from '../components/Columns/Columns';
import styles from './index.module.scss';
import { personalInfo } from '../content/personalInfo';

const HomePage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>JN | Jose Nunes</title>
      </Head>

      <section className="section">
        <VCard />

        <p className={styles.introduction}>
          I&apos;ve been a Frontend developer for more than {personalInfo.feYearsExperience} years.
          I love to build usable, accessible, and beautiful interfaces. I&apos;m a big fan of clean,
          reusable, and maintainable code.
        </p>

        <Link href="/about">
          <a className={styles.link}>About Me →</a>
        </Link>
      </section>

      <Columns>
        <Works />

        <Projects />
      </Columns>
    </main>
  );
};

export default HomePage;
