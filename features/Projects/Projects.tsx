import React from 'react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { ListItem } from '../../components/ListItem/ListItem';
import { List } from '../../components/List/List';
import styles from './Projects.module.scss';
import { projects } from './Projects.meta';

const Projects = () => {
  return (
    <section>
      <SectionTitle>Recent Projects</SectionTitle>

      <p className={styles.listDescription}>
        Some of the projects I maintain during my free time (breakable toys):
      </p>

      <List>
        {projects.map(project => (
          <ListItem
            key={project.key}
            href={project.url}
            text={project.linkText}
            helpText={project.helpText}
            auxText={project.auxInfo}
            isExternal
          />
        ))}
      </List>
    </section>
  );
};

export default Projects;
