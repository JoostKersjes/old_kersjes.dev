import Head from 'next/head';
import type { ReactElement } from 'react';

import Emoji from '../components/Emoji';
import TopBarLayout from '../layouts/TopBarLayout';

function Custom404(): ReactElement {
  return (
    <>
      <Head>
        <title>404 | Kersjes.dev</title>
      </Head>

      <TopBarLayout>
        <section className="kd_max-w-container flex justify-center my-32">
          <div className="inline-block p-8 bg-gray-900 rounded-xl shadow-xl">
            <h1 className="text-gray-200 text-xl mb-2">
              <Emoji char="⚠️" label="Warning" className="mr-4" />
              Page Not Found
            </h1>
            <p className="text-gray-400 text-lg">My appologies for the inconvenience...</p>
          </div>
        </section>
      </TopBarLayout>
    </>
  );
}

export default Custom404;
