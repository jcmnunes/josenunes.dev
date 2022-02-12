import React from 'react';
import styles from './Skills.module.scss';
import { Progress } from '../../components/Progress/Progress';
import { skills } from './Skills.meta';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

export const Skills = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>

      <ul className={styles.wrapper}>
        {skills.map(({ key, name, value }) => (
          <li key={key} className={styles.skill}>
            <div className={styles.skillName}>{name}</div>

            <Progress progress={value} />
          </li>
        ))}
      </ul>
    </>
  );
};
