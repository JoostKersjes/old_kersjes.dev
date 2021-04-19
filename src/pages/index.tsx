import Head from 'next/head';
import type { ReactElement } from 'react';

import IntroHero from '../components/IntroHero';
import StandardLayout from '../layouts/StandardLayout';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>Kersjes.dev</title>
      </Head>

      <StandardLayout>
        <IntroHero />

        <section className="kd_max-w-container"></section>
      </StandardLayout>
    </>
  );
}

export default Home;
