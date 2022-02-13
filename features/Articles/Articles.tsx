import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/ListItem/ListItem';
import { articles } from './Articles.meta';

const recentArticles = articles.slice(0, 5);

export const Articles = () => {
  return (
    <section>
      <SectionTitle>Recent articles I 😍</SectionTitle>

      <List>
        {recentArticles.map(course => (
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
