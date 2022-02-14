import Head from 'next/head';
import { NextPage } from 'next';
import { Works } from '../../features/Works/Works';

const WorksPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>JN | Work</title>
      </Head>

      <Works />
    </main>
  );
};

export default WorksPage;
