import React from 'react';
import NextHead from 'next/head';

export const Head: React.FC = ({ children }) => {
  return (
    <NextHead>
      <meta name="description" content="Personal website" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      {children}
    </NextHead>
  );
};
