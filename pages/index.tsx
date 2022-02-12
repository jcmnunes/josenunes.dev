import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/index.module.scss';
import { Works } from '../features/Works/Works';
import Projects from '../features/Projects/Projects';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Jose Nunes</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello,
          <br />
          I&apos;m <span>Jose Nunes</span>
        </h1>

        <h2 className={styles.subtitle}>
          <span>Frontend</span> Developer
        </h2>

        <p className={styles.introduction}>
          I&apos;ve been a Frontend developer for more than 7 years. I love to build usable,
          accessible, and beautiful interfaces. I&apos;m a big fan of clean, reusable, and
          maintainable code.
        </p>

        <Link href="/about">
          <a className={styles.link}>About Me →</a>
        </Link>

        <div className={styles.sections}>
          <Works />

          <Projects />
        </div>
      </main>
    </div>
  );
};

export default Home;
