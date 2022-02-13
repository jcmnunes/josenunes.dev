import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Works } from '../features/Works/Works';
import Projects from '../features/Projects/Projects';
import { VCard } from '../features/VCard/VCard';
import styles from './index.module.scss';

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
          I&apos;ve been a Frontend developer for more than 7 years. I love to build usable,
          accessible, and beautiful interfaces. I&apos;m a big fan of clean, reusable, and
          maintainable code.
        </p>

        <Link href="/about">
          <a className={styles.link}>About Me →</a>
        </Link>
      </section>

      <section className={styles.sections}>
        <Works />

        <Projects />
      </section>
    </main>
  );
};

export default HomePage;
