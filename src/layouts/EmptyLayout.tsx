import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
}

function EmptyLayout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}

export default EmptyLayout;
