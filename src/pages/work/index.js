import React from 'react';
import List from '../../components/List';

import Layout from '../../components/layouts/layout';
import Heading from '../../styles/Heading';

import worksData from '../../content/works';

const WorkIndex = () => {
  return (
    <Layout>
      <Heading>Recent Work Experiences</Heading>
      <List data={worksData} />
    </Layout>
  );
};

export default WorkIndex;
