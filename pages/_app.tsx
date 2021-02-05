import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

import '../styles/tailwind.css';

function KersjesDevApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default KersjesDevApp;
