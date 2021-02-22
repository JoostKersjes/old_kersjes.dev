import Head from 'next/head';
import { ReactNode } from 'react';

function Home(): ReactNode {
  return (
    <>
      <Head>
        <title>Home - Kersjes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Joost Kersjes</h1>
    </>
  );
}

export default Home;
