import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  extraClassNames?: string;
}

function LayoutContainer({ children, extraClassNames = '' }: Props): ReactElement {
  return (
    <div id="layout-container" className={`bg-gray-800 min-h-screen ${extraClassNames}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}

export default LayoutContainer;
