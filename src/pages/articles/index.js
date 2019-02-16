import React from 'react';
import List from '../../components/List';

import Heading from '../../styles/Heading';

import articlesData from '../../content/articles';

const CoursesIndex = () => {
  return (
    <>
      <Heading>
        Recent articles I{' '}
        <span role="img" aria-label="heart-eyes-emoji">
          😍
        </span>
      </Heading>
      <List data={articlesData} />
    </>
  );
};

export default CoursesIndex;
