import React from 'react';
import List from '../../components/List';

import Layout from '../../components/layouts/layout';
import Heading from '../../styles/Heading';

import coursesData from '../../content/courses';

const CoursesIndex = () => {
  return (
    <Layout>
      <Heading>Courses I took</Heading>
      <List data={coursesData} />
    </Layout>
  );
};

export default CoursesIndex;
