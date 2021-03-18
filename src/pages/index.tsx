import Head from 'next/head';
import { ReactElement } from 'react';
import StandardLayout from '../layouts/StandardLayout';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Kersjes.dev</title>
      </Head>

      <StandardLayout>
        <section className="kd_max-w-container"></section>
      </StandardLayout>
    </>
  );
}

export default Home;
