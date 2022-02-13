import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
