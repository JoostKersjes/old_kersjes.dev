import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import NavBar from '../components/NavBar';

import '../styles/tailwind.css';

function KersjesDevApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default KersjesDevApp;
