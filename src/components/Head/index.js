import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Home({ title, description, bg }) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="TheOfficeQuiz" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
