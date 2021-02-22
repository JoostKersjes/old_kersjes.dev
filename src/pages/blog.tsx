import Head from 'next/head';
import { ReactElement } from 'react';
import EmptyLayout from '../layouts/EmptyLayout';

function Blog(): ReactElement {
  return (
    <EmptyLayout>
      <Head>
        <title>Blog - Kersjes.dev</title>
      </Head>
      <h1>Blog</h1>
    </EmptyLayout>
  );
}

export default Blog;
