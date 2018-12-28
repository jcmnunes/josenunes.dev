import React from 'react';
import List from '../../components/List';

import Layout from '../../components/layouts/layout';
import Heading from '../../styles/Heading';

import projectsData from '../../content/projects';

const ProjectsIndex = () => {
  return (
    <Layout>
      <Heading>Recent Projects</Heading>
      <List data={projectsData} />
    </Layout>
  );
};

export default ProjectsIndex;
