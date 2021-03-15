import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

import '../styles/tailwind.css';

function KersjesDevApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default KersjesDevApp;
