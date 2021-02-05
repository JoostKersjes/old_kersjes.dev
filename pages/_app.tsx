import type { AppProps } from 'next/app';

import '../styles/tailwind.css';

function KersjesDevApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default KersjesDevApp;
