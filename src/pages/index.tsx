import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: React.FC = () => (
  <div>
    <Head>
      <title>Codesbiome</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    TBC Next..!
    <br />
    <Link href='/about'>
      <a>About</a>
    </Link>
  </div>
);

export default HomePage;
