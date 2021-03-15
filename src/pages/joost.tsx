import Head from 'next/head';
import { ReactElement } from 'react';
import Emoji from '../components/Emoji';
import StandardLayout from '../layouts/StandardLayout';

function Joost(): ReactElement {
  return (
    <>
      <Head>
        <title>Joost | Kersjes.dev</title>
      </Head>

      <StandardLayout>
        <section className="flex justify-center my-32">
          <div className="inline-block p-8 bg-gray-900 rounded-xl shadow-xl">
            <h1 className="text-gray-200 text-xl mb-2">
              <Emoji char="🏗️" label="Construction" className="mr-4" />
              Page Under Construction
            </h1>
            <p className="text-gray-400 text-lg">I cannot wait for you to see it :)</p>
          </div>
        </section>
      </StandardLayout>
    </>
  );
}

export default Joost;
