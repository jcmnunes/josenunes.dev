import React from 'react';
import List from '../../components/List';

import Heading from '../../styles/Heading';

import worksData from '../../content/works';

const WorkIndex = () => {
  return (
    <>
      <Heading>Recent Work Experiences</Heading>
      <List data={worksData} />
    </>
  );
};

export default WorkIndex;
