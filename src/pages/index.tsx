import Head from 'next/head';
import { ReactElement } from 'react';
import EmptyLayout from '../layouts/EmptyLayout';

function Home(): ReactElement {
  return (
    <EmptyLayout>
      <Head>
        <title>Kersjes.dev</title>
      </Head>
      <h1>Joost Kersjes</h1>
    </EmptyLayout>
  );
}

export default Home;
