import React from 'react';
import List from '../../components/List';

import Heading from '../../styles/Heading';

import projectsData from '../../content/projects';

const ProjectsIndex = () => {
  return (
    <>
      <Heading>Recent Projects</Heading>
      <List data={projectsData} />
    </>
  );
};

export default ProjectsIndex;
