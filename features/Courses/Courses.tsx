import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ListItem } from '../../components/ListItem/ListItem';
import { List } from '../../components/List/List';
import { courses } from './Courses.meta';

const recentCourses = courses.slice(0, 5);

export const Courses = () => {
  return (
    <section>
      <SectionTitle>Recent courses I took</SectionTitle>

      <List>
        {recentCourses.map(course => (
          <ListItem
            key={course.linkText}
            href={course.url}
            text={course.linkText}
            helpText={course.helpText}
            auxText={course.auxInfo}
            isExternal
          />
        ))}
      </List>
    </section>
  );
};
