import React, { useState } from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ListItem } from '../../components/ListItem/ListItem';
import { courses } from './Courses.meta';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';
import styles from './Courses.module.scss';

const recentCourses = courses.slice(0, 10);

export const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  const coursesList = showAll ? courses : recentCourses;

  return (
    <section>
      <SectionTitle>Recent courses I took</SectionTitle>

      <section className={styles.coursesList}>
        {coursesList.map(course => (
          <ListItem
            key={course.linkText}
            href={course.url}
            text={course.linkText}
            helpText={course.helpText}
            auxText={course.auxInfo}
            isExternal
          />
        ))}
      </section>

      {!showAll && (
        <SecondaryButton onClick={() => setShowAll(true)} type="button" style={{ marginTop: 24 }}>
          Show all
        </SecondaryButton>
      )}
    </section>
  );
};
