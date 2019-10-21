import React from 'react';
import List from '../../../components/List';

import Heading from '../../../styles/Heading';

import coursesData from '../../../content/courses';

const CoursesIndex = () => {
  return (
    <>
      <Heading>Courses I took</Heading>
      <List data={coursesData} />
    </>
  );
};

export default CoursesIndex;
