import Head from 'next/head';
import { NextPage } from 'next';
import { Works } from '../../features/Works/Works';

const WorksPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JN | Work</title>
      </Head>

      <Works />
    </div>
  );
};

export default WorksPage;
