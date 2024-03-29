import React from 'react';
import { NextPage } from 'next';
import { Skills } from '../../features/Skills/Skills';
import { VCard } from '../../features/VCard/VCard';
import styles from './index.module.scss';
import { GetInTouch } from '../../features/GetInTouch/GetInTouch';
import { Courses } from '../../features/Courses/Courses';
import { personalInfo } from '../../content/personalInfo';
import { Head } from '../../components/Head/Head';

const AboutPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>JN | About</title>
      </Head>

      <section className="section">
        <VCard showAvatar />

        <p className={styles.paragraph}>
          Hi, my name is Jose Nunes, I&apos;m a Frontend Developer from Portugal. Being a developer
          for more than {personalInfo.feYearsExperience} years now, I&apos;ve worked on several
          challenging and interesting projects.
        </p>

        <p className={styles.paragraph}>
          I love to build usable, accessible, and beautiful interfaces. I&apos;m a big fan of clean,
          reusable, and maintainable code. I&apos;m constantly trying to improve and to learn new
          things.
        </p>

        <p className={styles.paragraph}>
          Although I started my Frontend career working with vanilla JavaScript and jQuery,
          I&apos;ve been working with React for almost {personalInfo.reactYearsExperience} years
          now.
        </p>
      </section>

      <section className="section">
        <GetInTouch />
      </section>

      <section className="section">
        <Skills />
      </section>

      <Courses />
    </main>
  );
};

export default AboutPage;
